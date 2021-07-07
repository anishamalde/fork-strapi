import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  recipeTitle: {
    border: `solid 2px ${theme.theme.colors.red}`,
    color: theme.theme.colors.darkBlue,
    padding: '64px 32px',
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      padding: '32px 16px',
    },
  },
  title: {
    color: theme.theme.colors.darkBlue,
    padding: '16px 0 8px 0',
    borderBottom: `solid 2px ${theme.theme.colors.red}`,
  },
  recipeCard: {
    marginTop: '16px',
    padding: '16px',
  },
  grid: {
    justifyContent: 'center',
    padding: '16px',
  },
  image: {
    zIndex: '20',
    marginTop: '-32px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-16px',
    },
    position: 'relative',
  },
}));
export default useStyles;
