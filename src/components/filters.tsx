import FilterThematic from './filter-thematic';
import FilterDifficul from './filter-difficul';

function Filters(): JSX.Element {


  return (

    <form className="filter" action="#" method="get">
      <FilterThematic />
      <FilterDifficul />


    </form>

  );
}

export default Filters;
