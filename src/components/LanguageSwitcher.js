import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  button: {
    textTransform: 'uppercase',
    color: '#ddd',
    fontWeight: 500,
    fontSize: '15px',
    padding: '5px 0',
    border: '2px solid transparent',
    letterSpacing: '0.5px',
    margin: '10px 15px 0 15px',
    '&:hover': {
      color: '#8eb640'
    }
  },
  buttonIconLeft: {
    marginRight: '4px'
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
}));

export default function LanguageSwitcher() {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const changeLocale = locale => {
    i18n.changeLanguage(locale, () => {
      setOpen(false);
    })

  }
  const LanguageItem = ({ locale }) => (
    <ListItem button>
      <ListItemText primary={t(locale)} onClick={() => changeLocale(locale)}/>
    </ListItem>
  )

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Tooltip title={t('tooltip_change_language')}>
            <IconButton className={classes.button}
                        aria-label="delete"
                        color="primary"
                        onClick={handleClick}>
              {i18n.language}
            </IconButton>
          </Tooltip>

          {open ? (
            <Paper className={classes.paper}>
              <List component="nav" aria-label="main mailbox folders">

                {['en', 'de', 'vi', 'cn', 'jp'].map(locale => {
                  return (
                    <LanguageItem locale={locale} key={locale}/>
                  )
                })}
              </List>


            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
