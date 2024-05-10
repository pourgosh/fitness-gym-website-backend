import express from "express";
import orderModel from "../models/orders.model.js";

const ORDERS_ROUTE = express.Router();

ORDERS_ROUTE.post("/order", async (req, res, next) => {
  try {
    const newItem = req.body;
    const addToDB = await new orderModel(newItem);
    addToDB.save();
    res.json("order was made successfully");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

ORDERS_ROUTE.get("/order", async (req, res, next) => {
  try {
    const ordersInDB = await orderModel.find().populate("order");
    res.json(ordersInDB);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

ORDERS_ROUTE.get("/order/:_id", async (req, res, next) => {
  try {
    const itemID = req.params;
    const ordersInDB = await orderModel.findById(itemID).populate("order");
    res.json(ordersInDB);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

ORDERS_ROUTE.put("/order/:_id", async (req, res, next) => {
  try {
    const itemID = req.params;
    const updatedInfo = req.body;
    const updateItemInDB = await orderModel.findByIdAndUpdate(
      itemID,
      updatedInfo,
      { new: true }
    );
    res.json({ msg: "item has been updated", data: updateItemInDB });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

ORDERS_ROUTE.delete("/order/:_id", async (req, res, next) => {
  try {
    const itemID = req.params;
    const updateItemInDB = await orderModel.findByIdAndDelete(itemID);
    res.json("item has been deleted");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default ORDERS_ROUTE;
