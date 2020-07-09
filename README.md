# web-tutorial

1. Define Database
2. Define Model
3. Define Seed
4. Generate Module
5. Generate Controller
6. Generate CRUD

# Sequelize Set Up

```
$ npm install --save sequelize sequelize-typescript mysql2
$ npm install --save-dev @types/sequelize
```

# 1. Define Migration

```
cd src/db
sequelize migration:generate --name blog
sequelize migration:generate --name user
sequelize migration:generate --name follow-relation
```
- user -< blogs
- blog belongsTo user
- user hasMany blog
- user >-< user through FollowRelation
## User

```typescript
interface User {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
```

## Blog
```typescript
interface Blog {
  id: number;
  title: string;
  contents: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
```

## FollowRelations
```typescript
interface FollowRelations {
  id: number;
  userId: number;
  followerId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
```

# Create Models

## User

## Blog

## Follow Relations


# Define Controller
- GET /blogs
- POST /blogs
- GET /blogs/:id
- PUT /blogs/:id
- DELETE /blogs/:id

# Try Http Request

# Try Plain HTML and Plain JavaScript
