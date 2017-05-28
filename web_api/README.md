# Web API

## Function

**Users**

| **Route**               | **HTTP** | **Description**                                     |
|-------------------------|----------|-----------------------------------------------------|
| /users 		              | POST     | Register 							                             |
| /users 					        | GET      | Get all user 							                         |
| /users/:id     			    | GET      | View user by ID (admin and current user only)       |
| /users/:id  			      | DELETE   | Delete user (admin only)       									   |
| /users/:id 		          | PUT      | Edit / Update user (admin and current user only)		 |

**Memos**

| **Route**               | **HTTP** | **Description**                                     |
|-------------------------|----------|-----------------------------------------------------|
| /memos 		              | POST     | Create new memo 				                             |
| /memos 					        | GET      | Get all memo (admin only)	                         |
| /memos/:id     			    | GET      | View memo (admin and current user only)    			   |
| /memos/:id  			      | DELETE   | Delete memo (admin and current useronly) 				   |
| /memos/:id 		          | PUT      | Edit / Update memo (admin and current user only)		 |


To Use
```javascript
npm install
nodemon app.js
```
