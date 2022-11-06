export type RankingScoreViewModel = {
    player: Players;
    score: number;
    matchDate: string; // The entity might not be the same retun that cames from the API. That´s the case
    heroes: Hero[];

}

type Players = {
    name: string;
    country: string;
}
type Hero = {
    name: string;
    level: number;
}
