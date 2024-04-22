import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { QuestsType } from '../types/quests.js';
import { setQuests } from './action';
import { APIRoute } from '../const';


export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<QuestsType>(APIRoute.Quests);
    dispatch(setQuests(data));
  },
);

