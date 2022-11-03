const express = require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
//console.log(date());

const app=express();
const items=['Buy Food','Cook Food','Eat Food'];
const workItems=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    
    
    /*var currentDay=today.getDay();
    var dayList=['sunday','monday','tuesday','wensday','thursday','friday','saturday']
    var day=""
    if(currentDay===6 || currentDay===0){
        day=dayList[currentDay];
    }
    else{
        day=dayList[currentDay];
    }*/
const day=date.getDate();
    res.render("list",{listTitle:day,newListItems:items});
});

app.post("/",function(req,res){
    console.log(req.body);  
    let item =req.body.newItem;
    if (req.body.list==="work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
    //console.log(item);
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"work list",newListItems:workItems});
});
/*app.post("/work",function(req,res){
    
    let item=req.body.newItem; 
    workItems.push(item);
    res.redirect('/work')
});*/

app.get('/about',function(req,res){
    res.render('about');
});
app.listen(3000,function(){
    console.log("Server started on port 3000.")
})
