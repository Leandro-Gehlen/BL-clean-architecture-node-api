import { LastRankingLoader } from "../../A-domain-layer/usecases";
import { Controller, HttpResponse, serverError, ok } from "../contracts";
import { RankingScoreViewModel } from "../representation";

export class LastRankingLoarderController implements Controller {
    constructor(private readonly lastRankingLoader: LastRankingLoader) { }
    async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
        try {
            const ranking = await this.lastRankingLoader.load();
            return ok(RankingScoreViewModel.mapCollection(ranking))
        }
        catch (error: any) {
            return serverError(error)
        }
    }
}

