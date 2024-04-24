import { LevelDifficultyType } from './types/difficulty-level';
import { ThematicsList } from './types/filters';

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

export const FILTER_THEMATIC_LIST: ThematicsList = [
  {id: 'all',
    thematic: 'Все квесты',
    def: true,
    icon: 'all-quests',
  },
  {id: 'adventure',
    thematic: 'Приключения',
    def: false,
    icon: 'adventure',
  },
  {id: 'horror',
    thematic: 'Ужасы',
    def: false,
    icon: 'horror',
  },
  {id: 'mystic',
    thematic: 'Мистика',
    def: false,
    icon: 'mystic',
  },
  {id: 'detective',
    thematic: 'Детектив',
    def: false,
    icon: 'detective',
  },
  {id: 'sci-fi',
    thematic: 'Sci-fi',
    def: false,
    icon: 'sci-fi',
  }
];

export enum SortType {
  All = 'Все квесты',
  Adventure = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
}
