export type User = {
    id: number
    name: string
}

export type Course = {
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
