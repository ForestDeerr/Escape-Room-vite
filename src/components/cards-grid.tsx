import Card from './card';

import { QuestsType } from '../types/quests';

type CardsGridProps = {
  quests: QuestsType;
}

function CardsGrid({quests}: CardsGridProps): JSX.Element {

  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <Card key={quest.id} questCard={quest} />
      ))}
    </div>
  );
}

export default CardsGrid;
