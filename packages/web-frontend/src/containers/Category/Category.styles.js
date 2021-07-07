import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '32px',
    paddingBottom: '4px',
    color: theme.theme.colors.darkPink,
    borderBottom: `solid 2px ${theme.theme.colors.red}`,
  },
}));

export default useStyles;
