import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';
import { ListCoursesPageContainer } from './components/pages/list-cources';

const CourseDetail: React.FC = () => {
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
          <ListCoursesPageContainer />
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
