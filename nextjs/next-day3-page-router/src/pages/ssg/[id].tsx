import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostDetailProps = {
  post: Post;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();

  const paths = data.posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/posts/${params?.id}`);
  const post = await res.json();

  return {
    props: { post },
  };
};

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/ssg" className="text-blue-600 hover:underline mt-4 inline-block">
        Back to Links
      </Link>
    </div>
  );
}
