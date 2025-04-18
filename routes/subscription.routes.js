import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js'
import { createSubscription, getuserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res)=>{
    res.send({title: 'GET all subsciriptions'})
})

subscriptionRouter.get('/:id', (req, res)=>{
    res.send({title: 'GET  subsciriptions details'})
})

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', (req, res)=>{
    res.send({title: 'UPDATE subsciriptions'})
})

subscriptionRouter.delete('/:id', (req, res)=>{
    res.send({title: 'DELETE subsciriptions'})
})

subscriptionRouter.get('/user/:id', authorize, getuserSubscription)

subscriptionRouter.put('/:id/cancel', (req, res)=>{
    res.send({title: 'CANCEL subsciriptions'})
})

subscriptionRouter.get('/upcoming-renewals', (req, res)=>{
    res.send({title: 'GET upcoming renewals'})
})

export default subscriptionRouter;