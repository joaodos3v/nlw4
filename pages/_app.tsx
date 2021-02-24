/**
 * Este componente é algo que fica por volta de todos os arquivos da aplicação e é utilizado para...
 * ...colocar todos componentes que são genéricos ao longo do sistema (Sidebar, Header, Footer, etc)
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
