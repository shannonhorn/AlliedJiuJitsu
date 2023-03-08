import Document, { Html, Head, Main, NextScript } from 'next/document';

class TheDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            httpEquiv='refresh'
            content="0; url='https://www.arespeoria.com'"
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&family=Open+Sans&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default TheDocument;
