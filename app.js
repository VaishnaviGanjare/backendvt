const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path=require('path');

const sequelize=require('./util/database');
const user=require('./user');
var cors=require('cors');
app.use(express.static(path.join(__dirname,'public')));

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/user/add-user',async(req, res, next)=>{
      console.log(res);
      const username=req.body.username;
      const email=req.body.email;
      const number=req.body.number;
  
      const data= await user.create({
          username:username,
          email:email,
          number:number
  
      })
      console.log('INFORMATION ADDED');
      res.status(201).json({newUserDetail:data});
})

  app.listen(3000);
  