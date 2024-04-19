function Filter(): JSX.Element {


  return (

    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="type" id="all" checked></input>
            <label className="filter__label" htmlFor="all">
              <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                <use href="#icon-all-quests"></use>
              </svg><span className="filter__label-text">Все квесты</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="adventure"></input>
            <label className="filter__label" htmlFor="adventure">
              <svg className="filter__icon" width="36" height="30" aria-hidden="true">
                <use href="#icon-adventure"></use>
              </svg><span className="filter__label-text">Приключения</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="horror"></input>
            <label className="filter__label" htmlFor="horror">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use href="#icon-horror"></use>
              </svg><span className="filter__label-text">Ужасы</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="mystic"></input>
            <label className="filter__label" htmlFor="mystic">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use href="#icon-mystic"></use>
              </svg><span className="filter__label-text">Мистика</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="detective"></input>
            <label className="filter__label" htmlFor="detective">
              <svg className="filter__icon" width="40" height="30" aria-hidden="true">
                <use href="#icon-detective"></use>
              </svg><span className="filter__label-text">Детектив</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="sciFi"></input>
            <label className="filter__label" htmlFor="sciFi">
              <svg className="filter__icon" width="28" height="30" aria-hidden="true">
                <use href="#icon-sci-fi"></use>
              </svg><span className="filter__label-text">Sci-fi</span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="level" id="any" checked></input>
            <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="easy"></input>
            <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="middle"></input>
            <label className="filter__label" htmlFor="middle"><span className="filter__label-text">Средний</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="hard"></input>
            <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>

  );
}

export default Filter;
