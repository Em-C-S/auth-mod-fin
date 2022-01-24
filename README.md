# Auth-Module-Final

Auth server with Role Based Access Control(RBAC) using a Access Control List(ACL).

### Specifications:

User can signup and signin to blog page
Routes performing those actions will be protected by both a valid user and that user's permissions.

## Update log

v1.0.0

### Dependencies

base-64, bcrypt, cors, dotenv, express, jest, jsonwebtoken, morgan, postgres, sequelize, sqlite3, supertest

Routes
POST /signup to create a user
POST /signin to login a user and receive a token
GET /secret should require a valid bearer token

[whiteboard](/Auth-api.png)

Author: Em-C-S
Emily Landers, Chris Harden, Scott Lease
