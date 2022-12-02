import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           backgroundColor: 'red',
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        },
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#F4FFF8"
        }
      }
    }
  },
  palette: {
      text: {
          primary: "#fff"
      },
      background: {
          default: "linear-gradient(0deg, rgba(239, 242, 242, 0) 0%, rgba(0, 0, 0, 0.1) 100%)"
      }
      
  },
    
});

export default lightTheme;