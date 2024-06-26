const express = require('express');
const Message = require('../Database/models/message');

const router = express.Router();

router.delete('/:id', async (req,res)=>{
    try{
        const deleteMessage = await Message.findByIdAndDelete(req.params.id);
        console.log(req.params.id);
        res.status(200).json({
            status: 'success',
            msg: deleteMessage
        });
    }catch(err){
        console.log(req.params.id);
        res.status(500).json({
            status:'Failed',
            msg: err
        });
    }
})

module.exports = router;