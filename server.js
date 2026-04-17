const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://YOUR_DB_LINK");

/* موديل الطلب */
const Order = mongoose.model("Order", {
  name:String,
  phone:String,
  address:String,
  product:String,
  qty:Number
});

/* API */
app.post("/order", async (req,res)=>{
  const order = new Order(req.body);
  await order.save();

  res.send("done");
});

app.listen(3000, ()=>console.log("running"));
