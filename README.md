A react app built with redux and [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). The app is deployed to AWS S3 and distributed with AWS cloudfront.

## Preview links
App can be accessed via this preview link: https://d3ok3bggq9wv0q.cloudfront.net/

## Tools

- React
- Redux
- Sass and CSS Grid
- Github
- Docker
- AWS S3
- AWS Cloudfront
- Slack
- Sentry

## Main features

- Movie filtering.
- New movie updated weekly.
- Popular and top rated movie filtering.
- Movie and actors information.

## How to run the project locally

- Clone the repo

- Run `npm install or yarn install`

- Create an account on [https://www.themoviedb.org/](https://www.themoviedb.org/) and obtain an API key.

- Create a .env file in the root of the project and add

```js
REACT_APP_API_SECRET=your api key
```

- Inside the circleCI folder, config.yml file is for the CI pipelines of circle CI. It is optional for you to deploy them through circleCI.
