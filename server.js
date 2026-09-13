require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const { MongoClient } = require("mongodb");

const app = express();

// Port
const PORT = process.env.PORT || 3000;

// MongoDB configuration
const mongoURL = process.env.MONGO_URI;
const dbName = "schemeNavigatorDB";
const userCollectionName = "USER_DETAILS";
const schemesCollectionName = "SCHEMES";

let db, users, schemes;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "coverpage.html"));
});

// Connect to MongoDB
MongoClient.connect(mongoURL)
  .then(client => {
    db = client.db(dbName);
    users = db.collection(userCollectionName);
    schemes = db.collection(schemesCollectionName);

    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });

// Register route
app.post("/register", async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  try {
    const existing = await users.findOne({ email });

    if (existing) {
      return res.json({
        success: false,
        error: "Email already registered."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({
      first_name,
      last_name,
      email,
      phone,
      password: hashedPassword,
      createdAt: new Date()
    });

    res.json({ success: true });

  } catch (err) {
    console.error("Registration error:", err);

    res.json({
      success: false,
      error: "Server error."
    });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        error: "User not found"
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({
        success: false,
        error: "Incorrect password"
      });
    }

    const userInfo = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    };

    res.json({
      success: true,
      user: userInfo
    });

  } catch (err) {
    console.error(err);

    res.json({
      success: false,
      error: "Server error."
    });
  }
});

// Filter helper
const parseFilterValue = (value) => {
  if (
    !value ||
    value === "any" ||
    value === "none" ||
    value === "null"
  ) {
    return null;
  }

  return value.split("/");
};

// Filter schemes route
app.post("/filter-schemes", async (req, res) => {
  const filters = req.body;

  try {
    const query = {};

    for (const key in filters) {
      let val = filters[key];

      if (key === "income") continue;

      const values = parseFilterValue(val);

      if (values === null) continue;

      query[key] = { $in: values };
    }

    const incomeValue = parseInt(filters.income);

    if (!isNaN(incomeValue)) {
      query["income_below"] = { $gte: incomeValue };
    }

    const result = await schemes.find(query).toArray();

    res.json({
      success: true,
      schemes: result
    });

  } catch (err) {
    console.error("Filter error:", err);

    res.json({
      success: false,
      error: "Server error."
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});