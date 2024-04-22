import { Link } from 'react-router-dom';
import { LevelDifficultyType } from '../types/difficulty-level';

import { QuestType } from '../types/quests';

type CardProps = {
  questCard: QuestType;
  levelDifficulty: LevelDifficultyType;
}

function Card({questCard, levelDifficulty}: CardProps): JSX.Element {
  const {id, previewImg, title, level, peopleMinMax} = questCard;


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
            <div className="quest-card__info-wrapper">
              <object>
                <a className="quest-card__link" href="quest.html">{title}</a>
              </object>
            </div>
            <ul className="tags quest-card__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use href="#icon-person"></use>
                </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use href="#icon-level"></use>
                </svg>{levelDifficulty[level]}
              </li>
            </ul>
          </div>
        </div>
      </ Link>
    </div>

  );
}

export default Card;
