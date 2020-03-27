// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Route = {
  id: string
  name: string
  departure: string
  arrival: string
  notification: boolean;
  schedule: Schedule;
  timeTable: TimeTable;
  requiredMinutes: number;
};

type Schedule = {

};

type TimeTable = {

};
