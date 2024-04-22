import Header from '../../components/header';
import Footer from '../../components/footer';
import Filters from '../../components/filters';
import CardsGrid from '../../components/cards-grid';

import { LevelDifficultyType } from '../../types/difficulty-level';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchQuestsAction } from '../../store/api-actions';

type MainPageProps = {
  levelDifficulty: LevelDifficultyType;
}


function MainPage({levelDifficulty}: MainPageProps): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchQuestsAction());

  }, [dispatch]);

  const quests = useAppSelector((state)=>state.quests);


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
            <Filters />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsGrid quests={quests} levelDifficulty={levelDifficulty} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
