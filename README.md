# webtech.cw2.00011920

# Documentation
# Student management database is an app that is small and simple showcase of school, college and university student management system. Technologies used for development: Node JS, Express JS, Mongo DB as a database. There are Courses and Students database collections, the former is for creating Course for students and the latter is for students who is going to apply for those created courses. For simplicity reason, Authentication and Authorization were not added to the project. Generally, user can create, update, delete and read all Courses as well as Students.

# How to start project in both local and production environment?
# In local machine, $npm run devStart command is used that fires $nodemon app.js command to run  project locally, in this case, "nodemon" package helped running local project without exit or stops. It is suggested to run $npm install command for installing all the third party dependencies, however, $npm install --save-dev nodemon to install nodemon development dependency
# In production, $npm start command is used to run project on the server which fires $node app.js command

# Application dependencies:
- Express.js easy to use and minimalistic web framework
- EJS Embedded Javascript Template is a template that allows use of node js variable and data inside of HTML file
- Method-Override package that allows use PUT, DELETE methods within HTML form which only supports POST and GET methods
- Mongoose is package that provides easy and simple connection between mongo db database and the application
- Validator helps validate database schema properties before writing them to database
- Nodemon runs the project without exits and interruptions during development

# Links
Github repository - https://github.com/Khurrambek/webtech.cw2.00011920
Actual app on Heroku - https://webtech-cw2-00011920.herokuapp.com/
