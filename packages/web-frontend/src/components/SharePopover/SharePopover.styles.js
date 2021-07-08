import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
  },
  avatar: {
    width: '32px',
    height: '32px',
    backgroundColor: theme.theme.colors.darkPink,
  },
  shareIcon: {
    color: theme.theme.colors.red,
  },
}));
export default useStyles;
