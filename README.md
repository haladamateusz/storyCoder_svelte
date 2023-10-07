# StoryCoder Svelte

## How to run it locally

Prerequisites:
- [Node.js](https://nodejs.org/en/) installed
- [Docker](https://www.docker.com/) installed
- [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/installation/installation/) installed

1. Create .env in root folder of this repo
2. Add database path to .env file: `DATABASE_URL=mongodb://mongoadmin:pass123@localhost:27017/dev-storycoder?authSource=admin`
3. run `npm run database-container:build`
4. run `npm run database:restore` to seed your MongoDB database with stories from .gzip archive
5. run `npx prisma generate` to generate prisma client
6. run `npm run dev` to start the app in development mode


## Remaining TODOs

- [ ] Add story-specific-page.
- [ ] Add some styles.
- [ ] Remove titles from markdowns.
- [ ] Create a deployment environment on a free tier cloud.
- [ ] Standardize data formating in contents (content is the property in database that holds whole story parsed from markdown file).

[//]: # (## Building)

[//]: # ()
[//]: # (To create a production version of your app:)

[//]: # ()
[//]: # (```bash)

[//]: # (npm run build)

[//]: # (```)

[//]: # ()
[//]: # (You can preview the production build with `npm run preview`.)

[//]: # ()
[//]: # (> To deploy your app, you may need to install an [adapter]&#40;https://kit.svelte.dev/docs/adapters&#41; for your target environment.)
