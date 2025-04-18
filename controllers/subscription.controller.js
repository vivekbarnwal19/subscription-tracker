import { workflowClient } from '../config/upstash.js';
import Subscription from '../models/subscription.model.js';
import { SERVER_URL } from '../config/env.js';
export const createSubscription = async (req , res, next)=>{
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        await workflowClient.trigger({
            url:`${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body:{
                subscriptionID: subscription.id,
            },headers: {
                'content-type': 'application/json',
            },
            retries: 0,
        })

        res.status(201).json({ success: true, data: subscription});
    } catch (e) {
        next(e);
    }
}

export const getuserSubscription = async (req , res, next)=>{
    try {
        //Check if the user is the same as the one in the token
        if(req.user.id !== req.params.id){
            const error = new Error('You are not the owner of this account');
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find( { user: req.params.id});

        res.status(200).json ({ success: true, data: subscriptions});
    } catch (e) {
        next(e);
    }
}