import {createAction} from '@reduxjs/toolkit';
import { QuestsType } from '../types/quests';

export const setQuests = createAction<QuestsType>('date/loadQuests');
