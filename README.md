[![Wayel Raihan](img/coffee.jpg)](https://mrylraihan.github.io/Coffee-Blog-Client/) 
# The Koffee Blog
---
## The BackStory
- This project has allowed me to incorporate everything we have learned in this bootcamp up until now, from using HTML, SCSS, JavaScript, Express JQuery, and deep diving into mongoDB
- to me this was a project that im passionate about, finding the right coffee spot and solving a problem i have all the time
- Building a full stack application from scratch 
---
## Instructions
1. User must use Sign-Up form, once completed User will be prompted with and error or success message 
      - POST REQUEST made will receive either 200 OK or 400 error 
2. If user received an error message, than the user must complete Sign-Up form again
3. When User has completed Sign-Up form with correct credentials they will receive a success message highlighted in green text
4. User must input credentials into the Sign-In form, here they will also be prompted with a error or success message
      - POST REQUEST made will receive either 200 OK or 400 error
5. If User input matched the Sign-Up credentials than the User will be get a success message and instantly be moved to the Blog Page
6. Once User is in the Blog Page User will be able to create a cafe
      - POST REQUEST made will receive either 200 OK or 400 error
7. User will be able to update, delete the cafe but only ones they have created, not anyone elses 
8. Once User can see all Cafes made by all users
9. User can choose to change password in the navbar 
      - PATCH REQUEST made will receive either 200 OK or 400 error message
10. User can choose to Sign-out in the nav bar as well, it will be Deleted
      - DELETE REQUEST made will receive either 200 OK or 400 error message
11. User can sign out and all data will be saved

## WireFrame
Wayels Wireframe file
![**Wayel project_2_wireframe**](img/wireframe1.jpg)


 1. Client must be able to sign-up successfully
 - upon. Clicking sign-up  submit button if successful user will be prompt with sign up message
 - if sign-up failed then user will be prompt with error message

 2. Client must be able to sign in successfully
 - once sign-in submit button is clicked user will be prompt with a success or error message
 - client will be directed to the Cafe page

 1. Client Cafe page
 - client will use hamburger drop-down to sign-out and change-password
 - client must see fetch, add and delete buttons to interact with the database

4. Client will interact with the database
 - client can add a Cafe: upon adding a Cafe client will fill out the Cafe form and submit
 - client submission will be saved into the database
- client will be able to update
 5. Client will be able to fetch/get all Cafe
- all Cafe will show
- client can get one Cafe by the ID

 6. Client will be able to delete a Cafe
 - once deleted client should not be able to see it them when fetching the Cafe.