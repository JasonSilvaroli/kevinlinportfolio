import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  },
  overrides: {
        MuiCssBaseLine: {
            "@global": {
            body: {
                  background: "linear-gradient(0deg, rgba(239, 242, 242, 0) 0%, rgba(0, 0, 0, 0.1) 100%)",
                }
            }
        }
    }
});

export default lightTheme;