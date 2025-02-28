import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (session) {
      const countdown = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(countdown);
        router.push("/dashboard");
      }, 5000);

      return () => clearInterval(countdown);
    }
  }, [session, router]);

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-2xl">Already logged in, Redirecting you in {seconds}...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">Welcome! Please log in.</h1>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
