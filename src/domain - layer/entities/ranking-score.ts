export type RankingScore = {
    player: Players
    score: number
    country: string
    hero: Hero

}

type Players = {
    name: string
    score: number
}
type Hero = {
    name: string
    level: number
}
