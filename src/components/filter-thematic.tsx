import { ThematicsList } from '../types/filters';
import { useAppDispatch } from '../hooks';
import { setTematicActive, getQuestActive } from '../store/action';

type FilterThematicProps = {
  ThematicList:ThematicsList;
}

function FilterThematic({ThematicList}: FilterThematicProps): JSX.Element {


  const dispatch = useAppDispatch();

  function changeCity (thematic:string) {

    dispatch(setTematicActive(thematic));
    dispatch(getQuestActive());

  }


  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        { ThematicList.map((element, index)=>(
          <li key={index} className="filter__item">
            <a >
              <input type="radio" name="type" id={element.id} />
              <label className="filter__label" htmlFor={element.id}>
                <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                  <use xlinkHref={`#icon-${element.icon}`}></use>
                </svg><span onClick={() => (changeCity(element.id))} className="filter__label-text">{element.thematic}</span>
              </label>
            </a>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterThematic;
