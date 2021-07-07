import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    paddingTop: '48px',
  },
  menu: {
    color: theme.theme.colors.darkBlue,
  },
  listItem: {
    color: theme.theme.colors.red,
  },
}));

export default useStyles;
