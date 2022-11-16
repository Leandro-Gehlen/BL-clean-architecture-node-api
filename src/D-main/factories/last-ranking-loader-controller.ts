import { Controller } from "../../B-presentation-layer/contracts"
import { LastRankingLoaderService } from '../../B-application-layer/services';
import { LastRankingLoarderController } from '../../B-presentation-layer/controllers';
import { FakeRankingRepo } from '../../C-infra-layer/repositories';

export const makeLastRankingLoarderController = (): Controller => {
    const repo = new FakeRankingRepo()
    const loader = new LastRankingLoaderService(repo)
    return new LastRankingLoarderController(loader)
}




