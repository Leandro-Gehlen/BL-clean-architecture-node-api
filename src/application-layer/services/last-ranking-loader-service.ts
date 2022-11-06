
import { RankingScore } from "../../domain-layer/entities";
import { LastRankingLoader } from "../../domain-layer/usecases";
import { LastRankingLoaderRepository } from "../contracts";


export class LastRankingLoaderService implements LastRankingLoader {
    constructor(private readonly lastRankingLoaderRepository: LastRankingLoaderRepository) { }
    async load(): Promise<RankingScore[]> {

    }
}