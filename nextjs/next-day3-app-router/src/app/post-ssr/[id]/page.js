import Link from 'next/link';

async function getPost(id) {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${id}`);
      if (!res.ok) throw new Error('Failed to fetch post');
      return res.json();
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }
  
  export default async function PostDetail({ params }) {
    const post = await getPost(params.id);
  
    if (!post) {
      return (
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        </main>
      );
    }
  
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
        <Link href={"/ssr"} className='font-bold underline text-[22px]'>Back to links</Link>
      </main>
    );
  }