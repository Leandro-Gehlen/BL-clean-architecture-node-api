
import { RankingScore } from "../../A-domain-layer/entities";
import { RankingUnavailableError } from "../../A-domain-layer/errors";
import { LastRankingLoader } from "../../A-domain-layer/usecases";
import { LastRankingLoaderRepository } from "../contracts";


export class LastRankingLoaderService implements LastRankingLoader {
    constructor(private readonly lastRankingLoaderRepository: LastRankingLoaderRepository) { }
    async load(): Promise<RankingScore[]> {
        if (new Date().getHours() > 21) {
            throw new RankingUnavailableError();
        }
        return this.lastRankingLoaderRepository.lastRankingLoader();
    }
}