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

module.exports = router