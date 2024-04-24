import { SortType } from './../const';
import {createAction} from '@reduxjs/toolkit';
import { QuestsType } from '../types/quests';

export const setQuests = createAction<QuestsType>('date/loadQuests');

export const getOffersActive = createAction('mainPage/getOffersActive');

export const getQuestActive = createAction('mainPage/getQuestActive');

export const setTematicActive = createAction('mainPage/setTematicActive', (value: string)=>({payload: value}));
export const getSortType = createAction('mainPage/getSortType', (value: SortType) => ({ payload: value }));
