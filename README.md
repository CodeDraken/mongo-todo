# mongo-todo
A todo API made with MongoDB &amp; NodeJS for learning.

Hosted on Heroku:
https://peaceful-ocean-58801.herokuapp.com/

Routes:
* GET /todos (get your todos)
* POST /todos (create a todo)
* PATCH /todos:id (edit a todo)
* DELETE /todos/:id (delete a todo)
* POST /users (create an account)
* GET /users/me (get your account info)
* POST /users/login (login)
* DELETE /users/me/token (logout)

You need to use an auth token in the x-auth header for private routes. Get one by creating a user and/or logging in.

Main tech used:
* NodeJS
* Express
* MongoDB

Unit Testing:
* Mocha
* Expect
* Supertest

Packages:
* bcryptjs
* body-parser
* express
* jsonwebtoken
* lodash
* mongodb
* mongoose
* validator
