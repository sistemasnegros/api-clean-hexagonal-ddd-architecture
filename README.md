
```
api-clean-hexagonal-ddd-architecture
├─ .editorconfig
├─ README.md
├─ build
├─ db
│  └─ app.db.sqlite
├─ nodemon.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ application
│  │  └─ services
│  │     └─ users.service.ts
│  ├─ domain
│  │  ├─ entities
│  │  │  └─ users.entity.ts
│  │  └─ respositories
│  │     └─ users.repository.ts
│  └─ infrastructure
│     ├─ express
│     │  ├─ controllers
│     │  │  └─ users.controller.ts
│     │  └─ server
│     │     └─ server.express.ts
│     └─ sequelize
│        ├─ config.sequelize.ts
│        ├─ models
│        │  └─ users.model.ts
│        └─ respositories
│           └─ users.repository.ts
└─ tsconfig.json

```