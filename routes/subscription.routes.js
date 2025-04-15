import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res)=>{
    res.send({title: 'GET all subsciriptions'})
})

subscriptionRouter.get('/:id', (req, res)=>{
    res.send({title: 'GET  subsciriptions details'})
})

subscriptionRouter.post('/', (req, res)=>{
    res.send({title: 'CREATE subsciriptions'})
})

subscriptionRouter.put('/:id', (req, res)=>{
    res.send({title: 'UPDATE subsciriptions'})
})

subscriptionRouter.delete('/:id', (req, res)=>{
    res.send({title: 'DELETE subsciriptions'})
})

subscriptionRouter.get('/user/:id', (req, res)=>{
    res.send({title: 'GET all user subsciriptions'})
})

subscriptionRouter.put('/:id/cancel', (req, res)=>{
    res.send({title: 'CANCEL subsciriptions'})
})

subscriptionRouter.get('/upcoming-renewals', (req, res)=>{
    res.send({title: 'GET upcoming renewals'})
})

export default subscriptionRouter;