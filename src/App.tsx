import React, { FC } from 'react';
import { Course } from './interfaces';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';
import { ListCourses } from './components/Organisms/body/list-cources';

const sampleRouteData: Course[] = [
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

const data: Course[] = [...sampleRouteData];

const CourseDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>This course id is {id}</h1>;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/courses">
          <ListCourses courses={data} />
        </Route>
        <Route exact path="/courses/add">
          <p>new route</p>
        </Route>
        <Route exact path="/courses/:id">
          <CourseDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
