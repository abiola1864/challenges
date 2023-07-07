import { useRouter } from "next/router";
import useSWR from "swr";


const ProductList = () => {
  const router = useRouter();
  const { id } = router.query;

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




// const ProductList = ({ id }) => {
//   const fetcher = (url) => fetch(url).then((res) => res.json());

//   const { data, error } = useSWR(`/api/products/${id}`, fetcher);

//   if (error) {
//     return <div>Error loading product</div>;
//   }

//   if (!data) {
//     return <div>Loading product...</div>;
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <p>Name: {data.name}</p>
//       <p>Price: {data.price}</p>
//     </div>
//   );
// };

// export default ProductList;
