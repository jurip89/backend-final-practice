const {Router} = require('express');

const Space = require('../models').space
const Story = require('../models').story
const authMiddleware = require('../auth/middleware')
const router = new Router();



router.get('/',async(req,res,next)=>{
    try {
        const spaces = await Space.findAll()
        res.send(spaces)
    } catch (error) {
        next(error)
    }
})
router.post('/',async(req,res,next)=>{
    try {
        const newOne = await Space.create(req.body);
         
        res.send(newOne)
    } catch (error) {
        next(error)
    }
})

router.get('/:id',async(req,res,next)=>{
    const {id} =req.params;
    try {
        const theOne = await Space.findByPk(id);
        !theOne && res.status(400).send('Nothing here!')
        res.send(theOne)
        
    } catch (error) {
        next(error)
    }
})

router.patch('/:id',authMiddleware,async(req,res,next)=>{
    const {id} = req.params;
    try {
        const theOne = await Space.findByPk(id)
        !theOne && res.status(400).send('Nothing here!')
        const betterOne = await theOne.update(req.body);
        res.send(betterOne)       
    } catch (error) {
        next(error)
    }
})

router.get('/:id/stories',async(req,res,next)=>{
    const {id} = req.params;
    try {
        const space = await Space.findByPk(id);
        !space && res.status(404).send('Nothing here Bro!')
     const stories=await Story.findAll({where:{spaceId :id}})
     stories.lenght < 1 && res.send({space,stories:[]})
     res.send({space,stories})
    } catch (error) {
        next(error)
    }
})
router.post('/:id/stories',authMiddleware,async(req,res,next)=>{
    const {id} = req.params;
    try {
        const newOne = await Story.create({...req.body,spaceId:id})
        res.send(newOne)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id/stories/:storyId',authMiddleware,async(req,res,next)=>{
    const {id,storyId} =req.params;
    try {
        const theOne = await Story.findByPk(storyId);
        !theOne && res.status(400).send('No Story brooo!');
        const killed = await theOne.destroy()
        res.send(killed)
    } catch (error) {
        next(error)
    }
})

module.exports= router;
