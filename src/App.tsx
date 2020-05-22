import React from 'react';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ListCoursesPageContainer } from './components/pages/list-courses';
import { RegisterCoursePageContainer } from './components/pages/register-course';
import { UpdateCoursePageContainer } from './components/pages/update-course';

function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
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
