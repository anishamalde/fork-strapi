import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '75.25%',
    height: '0',
  },
  card: {
    margin: '16px 32px',
  },
  cardHeader: {
    color: theme.theme.colors.darkBlue,
  },
}));

export default useStyles;
