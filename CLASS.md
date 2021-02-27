# NLW-4

## Aula 01

- O que aprender?
- Em que momento aprender?
- E como aprender de forma eficiente?

### Criando nosso projeto com CRA (create react app):

- `yarn create react-app <nome> --template=typescript`
  - Com npm: `npx create-react-app <nome> ...`

> Código: **#rumoaoproximonivel**

## Aula 02

- O Next.js pode ser considerado um framework em cima do React.js
- "Três siglas mais famosas do desenvolvimento Front End hoje em dia":
  - **SPA (Single Page Application)**: toda a interface é construída no Front End
    - Atualmente, o grande problemas das SPA's são os obstáculos de SEO (Search Engine Optimization), pois a aplicação não é nada sem JavaScript e alguns indexadores não habilitam o JavaScript para indexar (ou não aguardam a geração de conteúdo)
  - **SSR (Server-side Rendering)**: basicamente, é quando existe uma camada intermediária entre o Back End e o Front End (ex: Next.js), que fica responsável por comunicar-se com o Back End e retornar ao Front End (ex: React.js) as informações em HTML e CSS (isto é, pré-prontas)
    - Hoje, o Next.js é uma ótima opção para este tipo de caso de uso (como e-commerces, blogs, sites... tudo aquilo que for público)
  - **SSG (Static Site Generation)**: essa é, na verdade, a primeira forma com que a web era utilizada, onde todo conteúdo (HTML + CSS + JS) era estático. Neste caso, é possível "cachear" páginas mais estáticas e evitar que, a cada acesso, ela precise ser criada e montada dinamicamente, sendo atualida a cada X tempo
- Hoje existem 3 principais maneiras de iniciar um projeto React.js:
  - **Utilizando CRA:** temos a funcionalidade de um SPA
  - **Gatsby:** muito bom em gerar páginas estáticas, com foco em SSG
  - **Next.js:** é um conjunto, que permite a mistura dos três conceitos descritos acima

### Criando nosso projeto com Next.js:

- `yarn create next-app <nome>` (não precisa passar template)
  - Com npm: `npx create-next-app <nome>`
- Instalando o Typescript e as tipagens no projeto (todas como dependência de desenvolvimento):
  `yarn add typescript @types/react @types/react-dom @types/node -D`

### CSS Modules

- [CSS Modules](https://github.com/css-modules/css-modules) é uma forma de fazer com que um CSS (estilo) esteja disponível para um único componente (escopado).
  - Dessa forma, ele nunca vai afetar os demais componentes em sua estilização.
  - Esta "forma" de organizar o estilo é embutida por default no Next.js

### Public

- Todos arquivos que ficam da pasta `/public` são, de fato, públicos.
  - Isto quer dizer que eles podem ser referenciados de qualquer lugar (ex.: `src` de uma imagem -> `src='caminho/dentro/de/public'`)

> Código: **#jornadainfinita**

## Aula 03

> Código: **focopraticagrupo**

## Aula 04

> Código: **#neverstoplearning**
