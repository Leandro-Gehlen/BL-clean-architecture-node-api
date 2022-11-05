export interface RankingScore {
  player: Players
  score: number
  country: string
  hero: Hero

}

interface Players {
  name: string
  score: number
}

interface Hero {
  name: string
  level: number
}
