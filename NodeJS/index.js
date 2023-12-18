const express = require("express");
const app = express();


app.get('/api/v1/product',(req,res)=>{
    res.json({
        name:"apple"
    })
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
