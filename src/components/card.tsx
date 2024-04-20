import { Link } from 'react-router-dom';

import { QuestType } from '../types/quests';

type CardProps = {
  questCard: QuestType;
}

function Card({questCard}: CardProps): JSX.Element {
  const {id, previewImg} = questCard;

  return (
    <div className="cities__places-list places__list tabs__content">
      <Link to={`quest/${id}`}>
        <div className="quest-card">
          <div className="quest-card__img">
            <picture>
              <img src={previewImg} width="344" height="232" alt="Мужчина в клетке в подземелье." />
            </picture>
          </div>
          <div className="quest-card__content">
            <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">Склеп</a>
            </div>
            <ul className="tags quest-card__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use href="#icon-person"></use>
                </svg>2&ndash;5&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use href="#icon-level"></use>
                </svg>Сложный
              </li>
            </ul>
          </div>
        </div>
      </ Link>
    </div>

  );
}

export default Card;
