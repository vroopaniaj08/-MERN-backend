const express = require('express')

const router = express.Router()



/**
 * @swagger
 * /auth/list:
 *   get:
 *     summary: Retrieve a list
 *     description: Retrieve a list with a simple JSON response.
 *     tags:
 *       - List
 *     responses:
 *       200:
 *         description: A JSON object with a status.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 */

router.get('/list',async(request,response)=>{
    console.log("hello")
    response.json({status:true})
})


  /**
   * @swagger
   * /auth/get:
   *   post:
   *     summary: Authenticate a user
   *     description: Authenticate a user with a username and password.
   *     tags:
   *       - User
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *                 example: johndoe
   *               password:
   *                 type: string
   *                 example: secretpassword
   *     responses:
   *       200:
   *         description: Authentication successful
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: boolean
   *                   example: true
   *       404:
   *         description: Missing username or password
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: boolean
   *                   example: false
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: boolean
   *                   example: false
   */


router.post('/get',async(request,response)=>{
    try{
        let {username,password} = request.body
        if(username && password){
            console.log(username," ",password)
            response.status(200).json({status:true})
        }
        else{
            console.log("plz enter the details correctly")
            response.status.json(404).json({status:false})
        }
    }
    catch(err){
        response.status.json(500).json({status:false})
    }
})


/**
 * @swagger
 * /auth/get/{id}:
 *   get:
 *     summary: Retrieve an item by ID
 *     description: Retrieve an item by its ID.
 *     tags:
 *       - Item
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the item to retrieve
 *     responses:
 *       200:
 *         description: Item retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 */

router.get('/get/:id',async(request,response)=>{
    try{
        let id = request.params.id
        if(id){
            response.status(200).json({status:true})
        }
        else{
            response.status(404).json({status:false})
        }
    }
    catch(err){
        response.status(500).json({status:false})
    }
})
module.exports = router