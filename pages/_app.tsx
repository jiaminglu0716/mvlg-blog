import "tailwindcss/tailwind.css";
import "../web/styles/markdown.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import "github-markdown-css/github-markdown.css";
import { AppContextProvider } from "../web/contexts/appContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Clone and deploy your own Next.js portfolio in minutes."
        />
        <title>mvlg</title>
      </Head>

      <AppContextProvider>
        <main className="p-0 m-0">
          <Component {...pageProps} />
        </main>
      </AppContextProvider>
    </div>
  );
}
