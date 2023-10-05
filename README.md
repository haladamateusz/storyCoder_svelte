# StoryCoder Svelte

## How to run it locally

1. Install [database-tools](https://www.mongodb.com/docs/database-tools/installation/installation/)
2. Create .env in root folder of this repo
3. Add `DATABASE_URL` to .env
4. run `npm run database:restore` to seed your data with database from .gzip archive
5. run `npx prisma generate` to generate prisma client
6. run `npm run dev` to start the app in development mode


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
