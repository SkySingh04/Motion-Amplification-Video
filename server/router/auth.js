const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')

require('../db/conn')
const User = require('../model/userSchema')


router.post('/signup', async (req,res) => {
    
    try{
        const {name,email,password,cpassword} = req.body;
    
        if(!name || !email || !password || !cpassword){
            return res.status(422).json({error:"plz fill the field"})
        }

        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"Email already exist"})
        }
        else if(password != cpassword){
            return res.status(422).json({error:"Password not matching"})
        }
        else{
            const user = new User({name,email,password,cpassword});
            await user.save()
            res.status(201).json({message:"User registered succesfully"})
        }
        
    }
    catch(err){
        console.log(err)
    }
    
})


router.post('/login', async (req,res) => {
    
    try{
        let token;
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(422).json({error:"plz fill the field"})
        }
        const userLogin = await User.findOne({email:email})
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            if(!isMatch){
                res.status(400).json({error:"invalid credentials pass"})
            }
            else{
                const token = await userLogin.generateAuthToken();
                console.log(token)
                res.cookie("jwtoken",token,{
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly:true
                });
                res.json({message:"login successfull"})
            }
        }
        else{
            res.status(400).json({error:"invalid credentials"})
        }
    }
    catch(err){
        console.log(err)
    }
})

router.post('/vid', async (req, res) => {
    try {
      const { email, link } = req.body;
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.videos.push(link);
      await user.save();
  
      res.status(200).json({ message: 'Link added to user videos' });
    } catch (error) {
      console.error('Server Error:', error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  router.post('/videos', async (req,res) => {
    try{
        let myData = await User.findOne({'email': req.body.email})
        res.json({videos:myData.videos})
    }catch(error){
        res.send("Server Error",error.message)
    }
})

// router.post('/menu', async (req,res) => {
//         let data = req.body.order_data
//         await data.splice(0,0,{Order_date:req.body.order_date})
//         let eId = await Order.findOne({'email':req.body.email})
//         console.log(eId)
//         if(eId == null){
//             try{
//                 await Order.create({
//                     email:req.body.email,
//                     order_data:[data]
//                 }).then(()=>{
//                     res.json({success:true})
//                 })
//             }catch(error){
//                 console.log(error)
//                 res.status(400).json({error:"Server Error"})
//             }
//         }
    
//     else{
//         try{
//             await Order.findOneAndUpdate({email:req.body.email},
//                                          {$push:{order_data:data}}).then(()=>{
//                                             res.json({success:true})
//                                          })
//                                         }catch(error){
//                                             res.send("Server Error",error.message)
//                                         }
//         }
    
// })

router.get('/home',authenticate,(req,res) => {
    console.log('Hello');
    res.json(req.rootUser);
});

router.get('/logout',(req,res) => {
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send("user logout")
})

module.exports = router
