import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="px-20">
      <h1>Server side fetching: All Posts</h1>
      <div className="flex flex-wrap">
        {loading ? (
          "Loading..."
        ) : (
          <ul>
            {posts && posts.map((post) => (
              <li key={post.id} className="mb-4">
                <a href={`/ssr/${post.id}`} className="text-blue-600 hover:underline">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/posts`);
    const data = await response.json();
    return {
      props: { posts: data.posts },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { posts: [] },
    };
  }
};

export default Posts;
