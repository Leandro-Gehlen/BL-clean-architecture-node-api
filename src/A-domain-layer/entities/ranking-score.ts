/*
Manguinhos uses type because it represents an instance of an objtect.
He uses interface just on situations that teh instance will be inplemeted by a
concrete class.
That´s because he likes to compare types with typescript.
*/

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
