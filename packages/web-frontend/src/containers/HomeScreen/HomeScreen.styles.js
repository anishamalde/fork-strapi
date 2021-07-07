import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '32px',
    display: 'flex',
    color: theme.theme.colors.darkPink,
    borderBottom: `solid 3px ${theme.theme.colors.red}`,
    fontSize: '5rem',
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    lineHeight: '1.167',
  },
}));

export default useStyles;
