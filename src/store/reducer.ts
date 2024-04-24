import {createReducer} from '@reduxjs/toolkit';
import {setQuests, setTematicActive, getSortType, getQuestActive} from './action';
import { getSortedQuests } from '../utils/get-sorted-quests';
import { QuestsType } from '../types/quests';
import { SortType } from '../const';

type InitalState = {
  quests: QuestsType;
  allQuests: QuestsType;
  tematicActive: string;
  sortType: SortType;

}

const initialState: InitalState = {
  quests: [],
  allQuests: [],
  tematicActive: 'all',
  sortType:SortType.All,

};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(getQuestActive, (state) => {
      if (state.allQuests.length) {
        const questsByCity = state.allQuests.filter(
          (item) => item?.type === state.tematicActive
        );
        state.quests = getSortedQuests(state.sortType, questsByCity);
      }

    })
    .addCase(setTematicActive, (state, action) => {
      state.tematicActive = action.payload;
    })
    .addCase(getSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {reducer};
