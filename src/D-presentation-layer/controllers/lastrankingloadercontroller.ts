import { Controller, HttpResponse } from "../contracts";
import { RankingScoreViewModel } from "../representation";

export class LastRankingLoarderController implements Controller {
    async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {

    }
}

