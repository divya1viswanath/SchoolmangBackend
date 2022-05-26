const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")

var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use (Bodyparser.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"   );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"   );
    next(); });

var studentModel=Mongoose.model("schoolmanages",
new Mongoose.Schema(
    {
        admission:String,
        rollno:String,
        name:String,
        cls:String,
        parent:String,
        mobile:String,
        address:String
    }
))

Mongoose.connect("mongodb+srv://divyav:mzcmongo@cluster0.zdycn.mongodb.net/SchoolmanagDb")

app.get("/api/view",(req,res)=>{
    myschool.find(
        (error,data)=>{
            if(error)
            {
                res.send({"Status":"error"})
            }
            else
            {
                res.send({"status":"success","data":data})
            }
        }
    )
})

app.post("/api/addstudent",(req,res) =>{
    var data=req.body
    let myschool=new studentModel(data)
    myschool.save(
       (error,data)=>{
            if(error)
            {
                res.send({"staus":"error"})
            }
            else
            {
                res.send({"status":"success","data":data})
            }
       }
   )
})

app.listen(5000,()=> {
    console.log("Server Running")
})