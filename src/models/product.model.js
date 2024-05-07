import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: [String],
    direction: { type: String },
    price: { type: Number, required: true },
    manufacturer: { type: String },
    alergens: [String],
    image: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      enum: ["supplement", "wear"],
      required: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);
export default productModel;
