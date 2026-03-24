# My Portfolio Web with Next.js

[![Publish docker image (CI)](https://github.com/alexjcm/portfolio-web/actions/workflows/publish-docker-image.yml/badge.svg?branch=main)](https://github.com/alexjcm/portfolio-web/actions/workflows/publish-docker-image.yml) [![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexjcm/portfolio-web) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

## Features

- Production ready Dockerfile
- Implemented [sentry](https://sentry.io) error tracking and monitoring
- Linting with Eslint
- Format code with Prettier
- ES6+ features with babel (including es6 import/export feature)
- Logging with [Pino](https://www.npmjs.com/package/pino)
- Traslate with [next-i18next](https://github.com/i18next/next-i18next#readme)

## Prerrequisites

- NodeJs 24
- [portfolio-ws](https://github.com/alexjcm/portfolio-ws)

## Installation

```bash
npm install
```

Run the development server:

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Generate an optimized version of your application for production.
Build the production application in the .next folder.

```bash
npm run build
```

```bash
npm start
```

## Deployment with docker

Build image:

```bash
docker build -t alexjcm/portfolio-web -f docker/DockerfileProd . --platform linux/amd64
```

Or

```bash
docker pull alexjcm/portfolio-web
```

Start container:

```bash
docker run --restart unless-stopped -d -p 3000:3000 \
--name portfolio-web --env-file $HOME/secrets/portfolio-web/.env.production alexjcm/portfolio-web
```

Stop container:

```bash
docker stop portfolio-web
```

## TODO

- Test cases written with Jest and React Testing Library
- Update or replace "typewriter-effect": "^2.21.0" in Type component
- Migrate Pages Router (/pages) to App Router (/app)

## Conventional commits

To view the convention used for commit messages, [click here](https://gist.github.com/alexjcm/6cc0a0a1ed96c85675a9d92706e1099d)

## License

[MIT licensed](./LICENSE).
