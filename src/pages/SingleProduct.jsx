import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);

  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { title, company, image, price, description, colors } =
    product.attributes;

  const dollarAmount = formatPrice(price);

  return <div>SingleProduct</div>;
};
export default SingleProduct;
