import { QuestsType } from './../types/quests';
import { SortType } from '../const';


export function getSortedQuests(tematic: SortType, quest: QuestsType) {
  return quest.filter((item) => item.type === tematic);
}

