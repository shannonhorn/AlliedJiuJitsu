import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {Component.title ?? "Allied Jiu Jitsu in Peoria and Cottonwood AZ"}
        </title>
        <script
          defer
          data-domain="alliedjiujitsu.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <meta
          name="description"
          content={
            Component.description ??
            "Allied Jiu Jitsu is a premier Brazilian Jiu Jitsu academy with locations in Peoria and Cottonwood, Arizona. We also offer fitness and striking classes for both adults and youth and concealed carry tactical self-defense seminars. Call us today or drop by to check things out FREE!"
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
