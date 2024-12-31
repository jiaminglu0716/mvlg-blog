import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Auth0Provider
    //   clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    //   domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    // >

    // </Auth0Provider>
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Clone and deploy your own Next.js portfolio in minutes."
        />
        <title>mvlg</title>
      </Head>

      <main className="p-0 m-0">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
