import * as React from 'react';
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { PageTitle } from '../../atoms/title';

export type HeaderProps = {
  title: string;
  onMenuButtonClick: React.MouseEventHandler;
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

export const Header: React.FC<HeaderProps> = ({
  title,
  onMenuButtonClick,
}: HeaderProps) => {
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
        </Toolbar>
      </AppBar>
    </div>
  );
};
