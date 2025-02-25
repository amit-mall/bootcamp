import Link from 'next/link';

async function getPosts() {
  try {
    const res = await fetch('https://dummyjson.com/posts', {
      next: { revalidate: 60 }, 
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [] };
  }
}

export default async function PostList() {
  const { posts } = await getPosts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/post-isr/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
