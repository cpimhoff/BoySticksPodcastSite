import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BoySticks Podcast</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pb-16 overflow-x-hidden max-w-3xl mx-auto">
        <Link href="/">
          <Image
            src="logotype.png"
            width={500}
            height={500}
            alt="Boysticks"
            className="px-16 mt-16 mx-auto"
          />
        </Link>
        <div className="container px-4 md:px-16 mx-auto mt-12">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
