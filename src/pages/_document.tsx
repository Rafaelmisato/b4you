import Document, {
  DocumentInitialProps,
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          {/* seo meta-tags */}
          <meta name="description" content="B4YOU" />
          <meta name="keywords" content="B4YOU" />
          <meta name="robots" content="index, follow" />

          {/* social-media meta-tags */}
          <meta property="og:title" content="B4YOU" />
          <meta property="og:description" content="B4YOU" />
          <meta property="og:site_name" content="B4YOU" />
          <meta property="og:image" content="" />

          {/* favicon */}
          {/* <link rel="icon" href=""/> */}

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
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
