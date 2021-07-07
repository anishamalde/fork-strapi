import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.theme.colors.red,
    margin: '16px 8px 16px 16px',
    [theme.breakpoints.down('sm')]: {
      margin: '4px',
    },
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: '8px',
    border: `solid 2px ${theme.theme.colors.darkPink}`,
    boxShadow: '0',
  },
}));
export default useStyles;
