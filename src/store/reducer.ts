import {createReducer} from '@reduxjs/toolkit';
import {setQuests} from './action';

import { QuestsType } from '../types/quests';

type InitalState = {
  quests: QuestsType;
}

const initialState: InitalState = {
  quests: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuests, (state, action) => {
      state.quests = action.payload;
    });

});

export {reducer};
