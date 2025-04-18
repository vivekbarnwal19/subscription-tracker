import { Router } from "express";
import { sendRemainders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post('/subscription/reminder',sendRemainders);

export default workflowRouter;