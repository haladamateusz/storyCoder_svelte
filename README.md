# StoryCoder Svelte

## How to run it locally

Prerequisites:

- [Node.js](https://nodejs.org/en/) installed
- [Docker](https://www.docker.com/) installed
- [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/installation/installation/) installed

1. Create .env in root folder of this repo
2. Add database path to .env file: `DATABASE_URL=mongodb://mongoadmin:pass123@localhost:27017/dev-storycoder?authSource=admin`
3. run `npm run database-container:build`
4. run `npm i`
5. run `npm run database:restore` to seed your MongoDB database with stories from .gzip archive
6. run `npx prisma generate` to generate prisma client
7. run `npm run dev` to start the app in development mode

## Remaining TODOs

- [ ] Add story-specific-page
- [ ] Add [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) for code consistency
- [ ] Add [SkeletonUI](https://www.skeleton.dev/) as UI Toolkit
- [ ] Add [Airbnb eslint](https://www.npmjs.com/package/eslint-config-airbnb) configuration
- [ ] Add some styles
- [x] Remove titles from markdowns content
- [ ] Create a deployment environment
- [ ] Standardize story structure
- [ ] Add a story editor (requires auth)
- [ ] Add Auth mechanism for editors (like [Lucia](https://lucia-auth.com/) or [Auth0](https://auth0.com/))
