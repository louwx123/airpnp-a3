const express = require("express"); 
const productModel = require("../models/products.js");
const router = express.Router();
const roomsModel= require("../models/rooms");
const isAdmin = require("../middleware/authorization")

router.get('/',(req,res)=>{
  roomsModel.find()
  .then((rooms)=>{


      //Filter out the information that you want from the array of documents that was returned into
      //a new array

      //Array 300 documents meaning that the array has 300 elements 


      const filteredTask =   rooms.map(rooms=>{

              return {

                  id: rooms._id,
                  title:rooms.title,
                  description:rooms.description,
                  price :rooms.price,
                  location : rooms.location,
                  roomPic: rooms.roomPic              }
      });


      res.render("roomlisting",{
         data : filteredTask
      });


  })
  .catch(err=>console.log(`Error happened when pulling from the database :${err}`));

  
})

router.get("/:id",(req,res)=>{

  roomsModel.findById(req.params.id)
  .then((rooms)=>{

      const {_id,title,description,dueDate,priority,status} = rooms;
      res.render("Task/taskEditForm",{
          _id,
          title,
          description,
          dueDate,
          priority,
          status  
      })

  })
  .catch(err=>console.log(`Error happened when pulling from the database :${err}`));


})

module.exports = router;

