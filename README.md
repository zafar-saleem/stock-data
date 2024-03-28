<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#git-strategy">Git Strategy</a></li>
    <li><a href="#dev-links">Dev Links</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Range Input](screenshots/screenshot.png)
This project retrieves stock data from third party API endpoint and render them in a table.



### Built With

Below are the core technologies I used for this project.

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [tailwind](https://tailwindcss.com/)
* [Vercel](https://vercel.com/)
* [Github](https://github.com/)
* [eslint](https://eslint.org/)
* [prettier](https://prettier.io/)
* [husky](https://github.com/typicode/husky)


<!-- GETTING STARTED -->
## Getting Started

To run this project, please follow the steps below.

### Prerequisites

To install node 20.7.0, run the command below.

* node
  ```sh
  nvm install v20.7.0
  ```

To install yarn run the command below.
* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git@github.com:zafar-saleem/stock-data.git
   ```
2. Install NPM packages
   ```sh
   yarn
   ```

<!-- USAGE EXAMPLES -->
## Usage

To run the project, below command will help.

  ```sh
  yarn dev
  ```



<!-- FOLDER STRUCTURE -->
## Folder Structure

  ```bash
  .
  ├── README.md
  ├── app
  │   ├── favicon.ico
  │   ├── globals.css
  │   ├── layout.tsx
  │   └── page.tsx
  ├── commitlint.config.js
  ├── hooks
  │   └── useAllDailyStocks.ts
  ├── next-env.d.ts
  ├── next.config.mjs
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── providers
  │   └── react-query-provider.tsx
  ├── public
  │   ├── next.svg
  │   └── vercel.svg
  ├── screenshots
  │   ├── git-strategy.png
  │   └── screenshot.png
  ├── services
  │   └── daily-service.ts
  ├── tailwind.config.ts
  ├── tsconfig.json
  └── yarn.lock
  ```

<!-- GIT STRATEGY -->
## Git Strategy

Below is the complete git workflow.

![Screenshot](screenshots/git-strategy.png)

<!-- DEV LINKS -->
## Dev Links

* [GitHub Project](https://github.com/zafar-saleem/stock-data)
* [Commits](https://github.com/zafar-saleem/stock-data/commits/main/)
* [CI/CD Pipelines](https://github.com/zafar-saleem/stock-data/deployments)
* [Branches](https://github.com/zafar-saleem/stock-data/branches)
* [Live Demo](https://stock-data-silk.vercel.app/)
