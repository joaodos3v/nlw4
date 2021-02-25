import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Obrigatoriamente, para "customizar" o index.html, deve-se extender a classe 'Document'. Optou-se...
 * ...por utilizar o arquivo '_document' porque ele carrega uma única vez na aplicação, independente...
 * ...de quanto o usuário navegue no app. Ou seja, o '_document' serve para colocar tudo aquilo que...
 * ...é estático, independente da página (ex.: fontes).
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main /> {/* É onde a aplicação será renderizada */}
          <NextScript /> {/* Alguns script que o Next.js injeta na aplicação de forma automática */}
        </body>
      </Html>
    );
  }
}
