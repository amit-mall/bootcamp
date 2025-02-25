import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className='text-center'>
      <h1>404 - Page Not Found</h1>
      <p>Redirected to the homepage in {countdown} seconds.</p>
    </div>
  );
}

