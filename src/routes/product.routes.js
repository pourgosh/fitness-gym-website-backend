import express from "express";
import productModel from "../models/product.model.js";

const PRODUCT_ROUTE = express.Router();

PRODUCT_ROUTE.post("/product", async (req, res, next) => {
  try {
    const newProduct = req.body;
    const isProductInDB = await productModel.findOne({
      title: newProduct.title,
    });
    if (isProductInDB) {
      console.log("item already exists in DB");
      return res.json("item already exists in DB");
    }
    const saveProduct = await new productModel(newProduct);
    saveProduct.save();
    res.json({ msg: "product was saved successfuly", newProduct: newProduct });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

PRODUCT_ROUTE.get("/product", async (req, res, next) => {
  try {
    const productsInDB = await productModel.find();
    res.json(productsInDB);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

PRODUCT_ROUTE.get("/product/:_id", async (req, res, next) => {
  try {
    const productID = req.params;
    const productInDB = await productModel.findById(productID);
    res.json(productInDB);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

PRODUCT_ROUTE.put("/product/:_id", async (req, res, next) => {
  try {
    const productID = req.params;
    const updatedInfo = req.body;
    const updateItem = await productModel.findByIdAndUpdate(
      productID,
      updatedInfo,
      {
        new: true,
      }
    );
    res.json({ msg: "update successful", newDate: updatedInfo });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

PRODUCT_ROUTE.delete("/product/:_id", async (req, res, next) => {
  try {
    const productID = req.params;
    const updateItem = await productModel.findByIdAndDelete(productID);
    res.json({ msg: "delete successful" });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
export default PRODUCT_ROUTE;
