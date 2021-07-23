import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.theme.colors.darkPink,
    borderBottom: `solid 3px ${theme.theme.colors.red}`,
    fontSize: '5rem',
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    lineHeight: '1.167',
    width: '100%',
  },
  grid: {
    padding: '32px',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
    },
  },
  welcomeText: {
    marginTop: '32px',
    padding: '32px',
  },
  redText: {
    color: theme.theme.colors.darkPink,
    padding: '16px 0',
  },
  blueText: {
    color: theme.theme.colors.darkBlue,
  },
  imageList: {
    width: 500,
    marginTop: '36px !important',
  },
  image: {
    top: '50%',
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
  },
}));

export default useStyles;
