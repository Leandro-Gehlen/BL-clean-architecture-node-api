export type RankingScore = {
    player: Players;
    score: number;
    matchDate: Date;
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
