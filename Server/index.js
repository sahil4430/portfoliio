 const express= require("express");
 const cros = require("cros")

 const app = express()
  app.use(cros())
  
  app.get ("/" ,(req,res) =>{
    res.download("sahil.pdf")
  })
  app.listen(3000)