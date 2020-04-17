import * as React from 'react';
import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
// import {MenuIcon} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { PageTitle } from '../../atoms/title/index';

type Props = {
  title: string;
  onMenuButtonClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Header: React.FC<Props> = ({
  title,
  onMenuButtonClick,
}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onMenuButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <PageTitle>{title}</PageTitle>
          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
};
