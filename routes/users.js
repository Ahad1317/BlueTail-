const router = require("express").Router() //creating router
const Info = require("../schema/Info")

//create

router.post("/",async(req,res)=>{
    const newUser = new Info(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//read 

router.get("/:id",async(req,res)=>{
    try{
        const user = await Info.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})


//update

router.put("/:id",async(req,res)=>{
    try{
    const user = await Info.findById(req.params.id)
    if(user.petId === req.body.petId){
        await user.updateOne({$set:req.body})
        res.status(200).json("Updated successfully !!!")
    }
    else{
        res.status(403).json("Update unsuccessfull :( Can't update other's id")
    }
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete
router.delete("/:id",async(req,res)=>{
    try{
    const user = await Info.findById(req.params.id)
    if(user.petId === req.body.petId){
        await user.deleteOne()
        res.status(200).json("Deleted successfully !!!")
    }
    else{
        res.status(403).json("Delete unsuccessfull :( Can't delete other's id")
    }
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router