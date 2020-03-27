import { Route, User } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const sampleRouteData: Route[] = [
  {
    id: '1',
    name: 'ルート１',
    departure: '出発地',
    arrival: '目的地',
    notification: true,
    schedule: {},
    timeTable: {},
    requiredMinutes: 10,
  },
  {
    id: '2',
    name: '会社 → 自宅',
    departure: '会社 (岩本町オフィス)',
    arrival: '岩本町',
    notification: true,
    schedule: {},
    timeTable: {},
    requiredMinutes: 10,
  },
  {
    id: '3',
    name: '自宅 → 会社',
    departure: '自宅',
    arrival: 'XXX駅',
    notification: true,
    schedule: {},
    timeTable: {},
    requiredMinutes: 5,
  },
];
