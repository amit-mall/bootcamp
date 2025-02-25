import React from "react";
import { GetServerSideProps } from "next";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface ProductDetailProps {
  product: Product | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <div className="text-center text-xl mt-10">Product not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="font-bold mb-4">{product.category}</div>
      <p className="text-gray-700 mb-6">{product.description}</p>
      <div className="text-2xl font-semibold">Price: ${product.price}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const siteUrl = `${protocol}://${host}`;
  /*NOTE:I can also use this site url from env file,
   but since it's on local, port is not fixed, so using from contex */
  try {
    const response = await fetch(`${siteUrl}/products.json`);
    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();
    const products: Product[] = data.products;
    const product = products.find((p) => p.id === parseInt(id as string));

    return {
      props: { product: product || null },
    };
  } catch (error) {
    console.error( error);
    return { props: { product: null } };
  }
};

export default ProductDetail;
