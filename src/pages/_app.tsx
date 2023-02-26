import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <nav className="flex flex-row gap-8 text-lg px-16 py-8 bg-slate-100 shadow-md">
        <Link href="/" className="font-black">
          BoySticks
        </Link>
        <Link href="/ep">Episodes</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="p-16">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
