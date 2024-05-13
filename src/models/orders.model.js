import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    ],
    address: {
      type: {
        country: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: String, required: true },
        houseNumber: { type: Number, required: true },
      },
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Paypal", "Master-Card", "Cash"],
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);
export default orderModel;
