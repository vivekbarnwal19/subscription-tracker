import aj from '../config/arcjet.js';
import { NODE_ENV } from '../config/env.js';

const arcjetMiddleware = async (req , res, next) =>{
    if (NODE_ENV === 'development') return next();
    try {
        const decision = await aj.protect(req, { requested: 1});

        if(decision.isDenied()){
            if(decision.reason.isRateLimit())  return res.status(429).json({error: 'Rate limit Exceede'})

            if(decision.reason.isBot()) return res.status(403).json({ error: 'Bot detected'});

            return res.status(403).json({ error: "Access Denied"});
        }

        next();
    } catch (error) {
        console.log(`Arcjet Middleware Errro: ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;