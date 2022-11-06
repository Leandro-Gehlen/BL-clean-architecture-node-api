
import { RankingScore } from "../../domain-layer/entities";
import { RankingUnavailableError } from "../../domain-layer/errors";
import { LastRankingLoader } from "../../domain-layer/usecases";
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