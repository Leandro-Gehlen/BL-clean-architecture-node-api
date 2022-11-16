import { Router } from 'express';
import { adaptRoute } from '../adapters/express-router-adapter';
import { makeLastRankingLoarderController } from '../factories';



export default (router: Router): void => {
    router.get('/ranking/last', adaptRoute(makeLastRankingLoarderController()))
}