import React from 'react';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { ListCoursesPageContainer } from './components/pages/list-courses';
import { RegisterCoursePageContainer } from './components/pages/register-course';
import { UpdateCoursePageContainer } from './components/pages/update-course';

const Home = () => {
  const history = useHistory();
  React.useEffect(() => {
    history.push('/courses');
  }, [history]);
  return null;
};

function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/courses">
            <ListCoursesPageContainer />
          </Route>
          <Route path="/courses/add" exact>
            <RegisterCoursePageContainer />
          </Route>
          <Route path="/courses/:id" exact>
            <UpdateCoursePageContainer />
          </Route>
        </Switch>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
