# Web API

## Function

**Users**

| **Route**               | **HTTP** | **Description**                                     |
|-------------------------|----------|-----------------------------------------------------|
| /users 		              | POST     | Register 							                             |
| /users 					        | GET      | Get all user 							                         |
| /users/:id     			    | GET      | View users (admin and current user only)            |
| /users/:id  			      | DELETE   | Delete user (admin only)       									   |
| /users/:id 		          | PUT      | Edit / Update user (admin and current user only)		 |


To Use
```javascript
npm install
nodemon app.js
```
