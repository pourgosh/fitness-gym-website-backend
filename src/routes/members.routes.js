import express from "express";
import bcrypt from "bcrypt";
import memberModel from "../models/member.model.js";

const USER_ROUTES = express.Router();

USER_ROUTES.post("/members", async (req, res, next) => {
  try {
    const newMember = req.body;
    const memberInDB = await memberModel.findOne({ email: newMember.email });
    if (memberInDB) {
      return res.json("member already exists in DB");
    }
    const hashedPassword = await bcrypt.hash(newMember.password, 12);
    const createMember = await new memberModel({
      ...newMember,
      password: hashedPassword,
    });
    createMember.save();
    res.json({
      msg: "new member created with the following properties:",
      newMember: createMember,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

USER_ROUTES.get("/members", async (req, res, next) => {
  try {
    const membersInDb = await memberModel.find();
    res.json(membersInDb);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

USER_ROUTES.get("/members/:_id", async (req, res, next) => {
  try {
    const memberID = req.params;
    const memberInDb = await memberModel.findById(memberID);
    res.json(memberInDb);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

USER_ROUTES.put("/members/:_id", async (req, res, next) => {
  try {
    const memberID = req.params;
    const updatedMemberInfo = req.body;
    const memberInDB = await memberModel.findByIdAndUpdate(
      memberID,
      updatedMemberInfo,
      { new: true }
    );
    res.json(
      "update successful under the following properties",
      updatedMemberInfo
    );
  } catch (err) {
    console.error(err);
    next(err);
  }
});

USER_ROUTES.delete("/members/:_id", async (req, res, next) => {
  try {
    const memberID = req.params;
    const memberInDB = await memberModel.findByIdAndDelete(memberID);
    res.json("delete successful under the following properties", memberInDB);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default USER_ROUTES;
