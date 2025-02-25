import Link from 'next/link';
import styles from './csr.module.css';
async function getPosts() {
    try {
      const response = await fetch('https://dummyjson.com/posts');
      if (!response.ok) throw new Error('Failed to load');
      return response.json();
    } catch (error) {
      console.error(error);
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
          <li key={post.id} className={styles.box}>
            <Link href={`/post-ssr/${post.id}`} className="text-blue-600 hover:underline focus:text-[#444]">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}