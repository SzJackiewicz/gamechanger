import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' />
          <Script src='https://fonts.bunny.net/css?family=noto-sans:400,500,700,800' />
          <script
            async
            src='https://js.stripe.com/v3/buy-button.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
