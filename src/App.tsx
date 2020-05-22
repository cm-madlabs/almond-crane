import React from 'react';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';
import { ListCoursesPageContainer } from './components/pages/list-courses';
import { RegisterCoursePageContainer } from './components/pages/register-course';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>This course id is {id}</h1>;
};

function App() {
  return (
    <Router>
      <Switch>
        <MuiPickersUtilsProvider utils={LuxonUtils}>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/courses">
            <ListCoursesPageContainer />
          </Route>
          <Route exact path="/courses/add">
            <RegisterCoursePageContainer />
          </Route>
          <Route exact path="/courses/details/:id">
            <CourseDetail />
          </Route>
        </MuiPickersUtilsProvider>
      </Switch>
    </Router>
  );
}

export default App;
