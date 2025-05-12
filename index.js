const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

require("./db/db.connect");

app.use(express.json());

const Product = require("./models/product.models");
const Category = require("./models/category.models");

const categoryData = [
  {
    name: "overshirts",
    image: "https://i.ibb.co/V8SS7xv/Overshirts.webp",
  },
  {
    name: "Hoodie",
    image: "https://i.ibb.co/chQmD5Nb/Hoodie.webp",
  },
  {
    name: "Trousers",
    image: "https://i.ibb.co/B53k2C1c/Trousers.webp",
  },
  {
    name: "Denim",
    image: "https://i.ibb.co/tMTxH4Js/Denim.webp",
  },
];

const allCategory = async () => {
  try {
    const data = await Category.insertMany(categoryData);
    console.log("Inserted categories:", data);
  } catch (error) {
    console.log("Error inserting categories:", error);
  }
};

// allCategory();

async function getAllCategory() {
  try {
    const allCategory = await Category.find();
    return allCategory;
  } catch (error) {
    console.log(error);
  }
}

app.get("/api/categories", async (req, res) => {
  try {
    const allCateData = await getAllCategory();
    if (allCateData.length != 0) {
      res.send(allCateData);
    } else {
      res.status(404).json({ error: "No Category Found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the Category" });
  }
});

app.listen(3000, () => {
  console.log("Server is Running");
});
