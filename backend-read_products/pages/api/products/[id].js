import Product from "../../../db/models/Product";
import dbConnect from "../../../db/connect";


export default async function handler(request, response) {

  const { id } = request.query;
  await dbConnect();
  if (request.method === "GET") {
    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  } else {
    response.status(400).json({ status: "Invalid request" });
  }
}