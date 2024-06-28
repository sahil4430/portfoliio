 const express = require ("express");
 const bodyparse= require("body-parser")
 //Body-Parser takes this text and converts it into a JavaScript object that your server can easily work with.
 //Body-Parser is a tool (middleware) used in Node.js applications with Express to read data from the body of HTTP requests.
 const nodemailer= require("nodemailer");
  const app = express();
  app.use(bodyparse.json());
