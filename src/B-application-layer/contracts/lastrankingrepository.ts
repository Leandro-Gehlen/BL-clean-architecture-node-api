
import { RankingScoreEntityRepresentation } from "../representation/rankingscoreentityrep";

export interface LastRankingLoaderRepository {
    lastRankingLoader: () => Promise<RankingScoreEntityRepresentation[]>
}