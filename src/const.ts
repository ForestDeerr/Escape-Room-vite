import { LevelDifficultyType } from './types/difficulty-level';

export enum APIRoute {
  Quests = '/quest',
  Booking = '/quest/{questId}/booking',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
}

export const LEVEL_DIFFICULTY: LevelDifficultyType = {
  hard: 'Сложный',
  medium: 'Средний',
  easy: 'Легкий',
} as const;


