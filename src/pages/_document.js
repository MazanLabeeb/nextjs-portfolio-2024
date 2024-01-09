import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          />
          <link rel="icon" type="image/png" href={"/favicon.png"} />

          <meta
            name="description"
            content="I am a full stack MERN developer and JavaScript enthusiast with more than 5 years' work experience. I have hand-on experience in developing Highly *Scalable* web applications. Proven ability to deliver high-quality software on time and within budget. Always eager to learn new web technologies."
          />
          <meta property="og:site_name" content="mazanlabeeb.me" />
          <meta
            property="og:title"
            content="Want to Collaborate or Work with me? Contact me on Upwork."
          />
          <meta
            property="og:description"
            content="I am Mazan Labeeb. I am a full stack web developer with a working experience of more than 5 years. "
          />
          <meta
            property="og:image"
            itemprop="image"
            content="https://www.mazanlabeeb.me/poster.png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}
