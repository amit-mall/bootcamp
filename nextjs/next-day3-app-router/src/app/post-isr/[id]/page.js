import Link from "next/link";


  
  export async function generateStaticParams() {
    try {
      const res = await fetch('https://dummyjson.com/posts');
      const { posts } = await res.json();
      return posts.map((post) => ({ id: post.id.toString() }));
    } catch (error) {
      console.error('Error generating static params:', error);
      return [];
    }
  }
  
  async function getPost(id) {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        next: { revalidate: 30 }, 
      });
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
          <Link href="isr" className="block mt-4 text-blue-600 hover:underline">
            Back to Links
          </Link>
        </main>
      );
    }
  
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
        <Link href="/isr" className="block mt-4 text-blue-600 hover:underline">
          Back to Links
        </Link>
      </main>
    );
  }

    