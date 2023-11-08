import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader = async ({ request }) => {
  const response = await customFetch(url);

  return { products: response.data.data, meta: response.data.meta };
};

const Products = () => {
  const { products, meta } = useLoaderData();

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
