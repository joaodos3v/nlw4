/**
 * Este componente é algo que fica por volta de todos os arquivos da aplicação e é utilizado para...
 * ...colocar todos componentes que são genéricos ao longo do sistema (Sidebar, Header, Footer, etc)
 */

import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
