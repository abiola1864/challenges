import useSWR from "swr";

const ProductList = ({ id }) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!data) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {data.name}</p>
      <p>Price: {data.price}</p>
    </div>
  );
};

export default ProductList;



// import getAllProducts from "services/productServices.js";

// export default function handler(request, response) {
//   const { id } = request.query; // Destructure the "id" variable from "request.query"

//   const product = getProductById(parseInt(id)); // Call "getProductById" with the parsed "id"

//   if (!product) {
//     response.status(404).json({ status: "Product not found" });
//     return;
//   }

//   response.status(200).json(product);
// }
