import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface ProductsProps {
  products: Product[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Link href={`/products/${product.id}`} passHref>
            <div className="border rounded-2xl p-4 shadow-lg m-4 w-80">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <h2 className="text-l font-bold mb-2">{product.category}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-lg font-semibold">Price: ${product.price}</div>
            </div>
      </Link>
    );
  };

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <>
      <h1>Products</h1>
      <div className="flex flex-wrap">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const siteUrl = `${protocol}://${host}`;
  const response = await fetch(`${siteUrl}/products.json`);
//   console.log('res line47',response)

  if (!response.ok) {
    console.error("Failed to fetch products");
    return { props: { products: [] } };
  }

  const products: Product[] = await response.json();
  return {
    props: { ...products },
  };
}

export default Products;

