# Tango Norte frontsida

## Dependencies

- React
- React-router-dom
- Styled Components
- react-global-style
- React-responsive
- Swiper
- framer-motion
- React Lottie player
- lottie-react
- dotenv
- Eslint and related packages
- react-big-calendar
- react-hook-form (används ej)
- Material UI för iconer
- svgo (används ej nu)

## Projektets struktur

### `backend`

`backend/`: Används ej och därför går jag inte närmare in på det. Ett `Express.js`-projekt för en backend-applikation som omfattar kod för att bygga API:er. Det bygger på `Node.js` och tillhandahåller syntax för att hantera HTTP-förfrågningar och svar, middleware, routing och hantering av olika HTTP-metoder.

### `frontend`

`frontend/`: Mappen innehåller följande:

- `node_modules/`: Denna mapp innehåller alla beroenden som krävs av applikationen. Den skapas efter att ha kört npm install

- `public/`: Katalogen public innehåller statiska filer som serveras som de är av applikationen. Detta inkluderar HTML-mallen (index.html) och andra filer som inte bearbetas av Webpack eller andra byggverktyg. Innehåller följande:

  - `index.html`

  - `assets/`: Denna mapp innehåller grafik

  - `images/`: Denna mapp innehåller bilder

  - `videos/`: Denna mapp innehåller videor

- `src/`: Katalogen src innehåller applikationens källkod. Den är strukturerad på följande sätt:

  - `components/`: Denna mapp håller följande mappar:

    - `lib/`: Denna mapp håller återanvändbara UI-komponenter som används i hela applikationen. Varje komponent är en JS-fil med tillhörande styles.

    - `pages/`: React-komponenter som representerar enskilda sidor eller vyer i applikationen. Dessa komponenter motsvarar specifika routes och fungerar som ingångspunkter för olika sektioner av appen. Varje komponent finns i sin egen mapp innehållande dess JS-fil, tillhörande styles i en egen mapp och sektioner av sidan nedbrutna som finns i en egen mapp

  - `data/`: innehåller json-filer

  - `styles/`: innehåller Globala Styles och css-filer

  - `utils/`: innehåller `urls.js` med urls som appen fetchar data från

  - `App.js` är huvudkomponenten i React-applikationen. Den fungerar som rotkomponenten som aggregerar och renderar andra komponenter. Den navigationslogik och är platsen där routes definieras med hjälp av React Router.

  - `index.js` är ingångspunkten för React-applikationen. Det är här React-appen renderas i DOM-en (Document Object Model). Den importerar huvudkomponenten (`App.js` i det här fallet), använder ReactDOM för att rendera den komponenten och injicerar den i HTML-dokumentet på den angivna rotplatsen.

- `.eslintrc.json` är en konfigurationsfil för ESLint, ett verktyg för att upprätthålla kodkvalitet och konsistens genom statisk kodanalys i JavaScript-projekt.

- `.gitignore` är en fil som används av Git för att specificera vilka filer och mappar som ska ignoreras och inte spåras av versionshanteringssystemet. Det är användbart för att undvika att inkludera oönskade eller känsliga filer i projektets versionshistorik.

- `jsconfig.json` är en konfigurationsfil som används främst inom JavaScript-projekt som använder Visual Studio Code (VS Code) som deras utvecklingsmiljö. Denna fil används för att konfigurera inställningar och beteenden för JavaScript-projekt i VS Code.

- `package.json` och `package-lock.json`
Dessa filer listar paket, projektberoenden skript och metadata om applikationen. De är avgörande för att konfigurera projektet och köra skript.

### `README.md` 

`README.md` Denna README-fil ger en översikt av projektet, installationsinstruktioner, användningsanvisningar och annan relevant information för utvecklare som bidrar till eller använder applikationen.

## React for beginners:

https://www.youtube.com/watch?v=SqcY0GlETPk

## Technologies used in this repository:
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## View it live

https://tango-norte.netlify.app

## Visuals

<img width="300" alt="Tango Norte Demo 1" src="/frontend/public/images/tango-norte-demo.png">
<img width="300" alt="Tango Norte Demo 2" src="/frontend/public/images/tango-norte-demo3.png">
<img width="300" alt="Tango Norte Demo 3" src="/frontend/public/images/tango-norte-demo2.png">
<img width="300" alt="Tango Norte Demo 4" src="/frontend/public/images/tango-norte-demo4.png">