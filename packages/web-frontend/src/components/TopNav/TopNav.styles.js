import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '100',
  },
  app: {
    backgroundColor: theme.theme.colors.primary,
    flexGrow: 1,
    display: 'flex',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  homeLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  topNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.theme.colors.darkBlue,
    height: '56px',
  },
  image: {
    objectFit: 'cover',
    width: '280px',
  },
  instagram: {
    color: theme.theme.colors.white,
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      right: '32px',
    },
  },
}));
export default useStyles;
