import FilterThematic from './filter-thematic';
import FilterDifficul from './filter-difficul';

import { ThematicsList } from '../types/filters';

type FiltersProps = {
  ThematicList:ThematicsList;
}

function Filters({ThematicList}: FiltersProps): JSX.Element {


  return (

    <form className="filter" action="#" method="get">
      <FilterThematic ThematicList={ThematicList} />
      <FilterDifficul />


    </form>

  );
}

export default Filters;
