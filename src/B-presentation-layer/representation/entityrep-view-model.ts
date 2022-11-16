import { RankingScore } from "../../A-domain-layer/entities";

export class RankingScoreViewModel {

    constructor(
        player: Players,
        score: number,
        matchDate: string, // The entity might not be the same retun that cames from the API. That´s the case
        heroes: Hero[],
    ) { }
    static map(entity: RankingScore): RankingScoreViewModel {
        return {
            ...entity,
            matchDate: entity.matchDate.toISOString()
        }
    }
    static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
        return entities.map(entity => RankingScoreViewModel.map(entity))
    }
}

type Players = {
    name: string;
    country: string;
}
type Hero = {
    name: string;
    level: number;
}
