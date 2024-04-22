import Card from './card';

import { QuestsType } from '../types/quests';
import { LevelDifficultyType } from '../types/difficulty-level';

type CardsGridProps = {
  quests: QuestsType;
  levelDifficulty: LevelDifficultyType;
}

function CardsGrid({quests, levelDifficulty}: CardsGridProps): JSX.Element {

  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <Card key={quest.id} questCard={quest} levelDifficulty={levelDifficulty}/>
      ))}
    </div>
  );
}

export default CardsGrid;
