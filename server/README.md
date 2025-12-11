# Server — HangOn Attires

This is the Express backend for HangOn Attires.

Install & run:

```powershell
cd server
npm install
# copy .env.example to .env and set MONGO_URI
npm run dev
```

API Endpoints:
- `GET /api` — returns `API working`
- `GET /api/products` — returns sample products or products from MongoDB

Notes for deployment:
- Set `MONGO_URI` environment variable on your host (Render, Heroku, etc.).
- Use `npm start` for production.
