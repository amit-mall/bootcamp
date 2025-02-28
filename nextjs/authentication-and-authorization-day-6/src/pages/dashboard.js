import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchData = async ()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data)
    }
    fetchData();
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-4">Users List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
