function FilterDifficul(): JSX.Element {


  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        <li className="filter__item">
          <input type="radio" name="level" id="any" ></input>
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
  );
}

export default FilterDifficul;
