import Header from '../../components/header';
import Footer from '../../components/footer';
import Filters from '../../components/filters';
import CardsGrid from '../../components/cards-grid';

import { LevelDifficultyType } from '../../types/difficulty-level';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchQuestsAction } from '../../store/api-actions';
import { ThematicsList } from '../../types/filters';

type MainPageProps = {
  levelDifficulty: LevelDifficultyType;
  ThematicList:ThematicsList;
}


function MainPage({levelDifficulty, ThematicList}: MainPageProps): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchQuestsAction());

  }, [dispatch]);

  const quests = useAppSelector((state)=>state.quests);
  const thematicActive = useAppSelector((state) => state.tematicActive);
  const filteredQuest = () => {
    if (thematicActive === 'all') {
      return quests;
    } else {
      const filteredQuestByThematic = quests.filter((offer) => offer.type === thematicActive);
      return filteredQuestByThematic;
    }

  };


  return (
    <div className="wrapper">

      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <Filters ThematicList={ThematicList} />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsGrid quests={filteredQuest()} levelDifficulty={levelDifficulty} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
