import { Request, Response } from "express";
import { Controller } from "../../B-presentation-layer/contracts";
import { makeLastRankingLoarderController } from "../factories";


export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponde = await controller.handle()
        res.status(httpResponde.statusCode).json(httpResponde.data)
    }
}