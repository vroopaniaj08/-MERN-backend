const express = require('express')
const server = express()
const nodemailer = require('nodemailer')

server.use('/api',async(req,res)=>{

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lavern15@ethereal.email',
            pass: 'WBV87sCMn2VgXWKS4H'
        }
    });

    const info = await transporter.sendMail({
        from: '"Apoorv jain 👻" <amelia.senger@ethereal.email>', // sender address
        to: ["apoorvjain7222@gmail.com"], // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      res.json({status:true,data:info})
})

server.listen(7000,()=>{
    console.log("the server is running on port 7000")
})