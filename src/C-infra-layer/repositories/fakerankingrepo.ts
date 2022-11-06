import { LastRankingLoaderRepository } from "../../B-application-layer/contracts";
import { RankingScoreEntityRepresentation } from "../../B-application-layer/representation";
import { ranking } from "../data/moch-db/datasource";

//ADAPTER CLASS
export class FakeRankingRepo implements LastRankingLoaderRepository {
    async lastRankingLoader(): Promise<RankingScoreEntityRepresentation[]> {
        // could return just ranking, but intentionaly the ranking data have a diferent data structure from RankingScore Entity
        //So, it´s now the moment we implement an adapter. To adapt the data that cames from API to the right format of our domain needs.
        return ranking.map((item) => ({   //ADAPTER IMPLEMENTATION
            player: {                      //ADAPTER IMPLEMENTATION
                name: item.user.name,       //ADAPTER IMPLEMENTATION
                country: item.user.country //ADAPTER IMPLEMENTATION
            },                              //ADAPTER IMPLEMENTATION
            score: item.score,              //ADAPTER IMPLEMENTATION
            matchDate: new Date(item.date), //ADAPTER IMPLEMENTATION
            heroes: item.heroes.map(i => ({ //ADAPTER IMPLEMENTATION
                name: i.name,               //ADAPTER IMPLEMENTATION
                level: i.level              //ADAPTER IMPLEMENTATION
            }))                             //ADAPTER IMPLEMENTATION           
        }));                                //ADAPTER IMPLEMENTATION
    }
}