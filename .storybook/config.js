// https://github.com/storybooks/storybook
import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import StoryRouter from 'storybook-react-router';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

addDecorator(StoryRouter());

const CssBaselineDecorator = (storyFn) => {
  return (
    <div>
      <CssBaseline />
      {storyFn()}
    </div>
  );
};
// Global Decorators
addDecorator(CssBaselineDecorator);
// Global Parameters
addParameters({
  options: {
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    panelPosition: 'right',
  },
});
configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

addDecorator((storyFn) => {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      {storyFn()}
    </MuiPickersUtilsProvider>
  );
});

addDecorator((storyFn) => {
  return <div style={{ padding: 20 }}>{storyFn()}</div>;
});
