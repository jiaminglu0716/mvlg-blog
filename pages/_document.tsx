import { Html, Head, Main, NextScript } from "next/document";
import { link } from "../web/common/link";
import { SearchContextProvider } from "../web/contexts/searchContext";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <body
        style={{
          backgroundImage: `url('${link("/desk.jpg")}')`,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
