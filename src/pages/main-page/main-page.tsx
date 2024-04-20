import Header from '../../components/header';
import Footer from '../../components/footer';
import Filter from '../../components/filter';
import CardsGrid from '../../components/cards-grid';

import { QuestsType } from '../../types/quests';

type MainPageProps = {
  quests: QuestsType;
}


function MainPage({quests}: MainPageProps ): JSX.Element {

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
            <Filter />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsGrid quests={quests} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
