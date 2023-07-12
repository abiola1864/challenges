import mongoose, { Schema } from "mongoose";

// describes the 'shape' of each Joke object
const productSchema = new Schema({
    name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

// create a model based on the schema (or use the existing one)
const Product = mongoose.models.Product || mongoose.model("Product",
productSchema);

export default Product;