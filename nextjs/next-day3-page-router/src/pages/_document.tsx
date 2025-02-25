import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <ul className="py-4 px-20 flex">
          <li className="pr-8">
            <Link href={'/csr'} className="text-blue-600 underline">
            CSR
            </Link>
          </li>
          <li className="pr-8">
            <Link href={'/ssr'} className="text-blue-600 underline">
            SSR
            </Link>
          </li>
          <li className="pr-8">
            <Link href={'/ssg'} className="text-blue-600 underline">
            SSG
            </Link>
          </li>
        </ul>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
