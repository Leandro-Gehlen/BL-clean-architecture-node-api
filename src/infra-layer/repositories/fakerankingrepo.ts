import { LastRankingLoaderRepository } from "../../application-layer/contracts";
import { RankingScoreEntityRepresentation } from "../../application-layer/representation";

export class FakeRankingRepo implements LastRankingLoaderRepository {
    async lastRankingLoader(): Promise<RankingScoreEntityRepresentation[]> {

    }
}