import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface ProductDetailProps {
  post: Post | null;
}

const PostDetail: React.FC<ProductDetailProps> = ({ post }) => {
  if (!post) {
    return <div className="text-center text-xl mt-10">Product not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <Link href={"/ssr"} className='font-bold underline text-[22px]'>Back to links</Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  try {
    const response = await fetch(`https://dummyjson.com/posts`);
    if (!response.ok) throw new Error("Failed to fetch posts");

    const data = await response.json();
    const posts: Post[] = data.posts;
    const post = posts.find((p) => p.id === parseInt(id as string));

    return {
      props: { post: post || null },
    };
  } catch (error) {
    console.error( error);
    return { props: { post: null } };
  }
};

export default PostDetail;
