import {makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme)=>({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'blue',
    fontStyle:'italic',
    fontFamily:'cursive'
  },
  image: {
    marginLeft: '50px',
    
  },
  [theme.breakpoints.down('sm')] :{
    mainContainer :{
      flexDirection : "column-reverse"
    }

  }
}));