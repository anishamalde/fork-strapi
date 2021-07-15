import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: theme.theme.colors.primary,
  },
  nav: {
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '100',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  homeLogo: {
    margin: '8px 0px 8px 24px',
  },
  topNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.theme.colors.darkBlue,
    height: '56px',
  },
  image: {
    objectFit: 'cover',
    width: '300px',
  },
}));
export default useStyles;
