import './assets/css/App.css';
import { CssBaseline, Container } from '@mui/material';
import { createTheme, hslToRgb, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// fonts
import { mersad, spaceMonoBold, spaceMonoItalic, makeSansReg } from './assets/fonts'

// components
import Header from './components/header';
import Footer from './components/footer';

// pages
import About from './pages/home-about';
import Work from './pages/work';
import Contact from './pages/contact';
import Resume from './pages/resume';

const theme = createTheme({
    palette: {
        mode: 'dark',
        common: {
            black: '#1c2535',
            white: '#f7f7f8'
        },
        primary: {
            main: '#6be6f5',
            light: '#a7f2fa',
            dark: '#0cbad6'
        },
        secondary: {
            main: '#ddbaf8',
            light: '#ecd9fb',
            dark: '#b363e9'
        },
        error: {
            main: '#fdb5a4',
            light: '#fed4ca',
            dark: '#fed4ca'
        },
        warning: {
            main: '#efc44b',
            light: '#f5de92',
            dark: '#e5941b'
        },
        info: {
            main: '#f3b4eb',
            light: '#f9d5f6',
            dark: '#de5fcc'
        },
        success: {
            main: '#91e4ab',
            light: '#c1f1d0',
            dark: '#33b45c'
        },
        grey: {
            50: '#f4f5f6',
            100: '#ebedef',
            200: '#dfe3e7',
            300: '#b1bdc8',
            400: '#8a99a8',
            500: '#697a8c',
            600: '#556372',
            700: '#404c59',
            800: '#323c48',
            900: '#232a34',
            A100: '#ebedef',
            A200: '#dfe3e7',
            A400: '#8a99a8',
            A700: '#404c59'
        }
    },
    typography: {
        fontFamily: [
            'Mersad',
            'Space Mono Bold',
            'Space Mono Bold Italic',
            'Make Sans'
        ],
        h1: { fontFamily: 'Mersad'},
        h2: { fontFamily: 'Mersad' },
        h3: {fontFamily: 'Space Mono Bold' },
        h4: { fontFamily: 'Space Mono Bold' },
        h5: { fontFamily: 'Space Mono Bold' },
        h6: { fontFamily: 'Space Mono Bold' },
        subtitle1: {
            fontFamily: 'Space Mono Bold Italic',
            fontSize: '1.25rem'
        },
        subtitle2: {
            fontFamily: 'Space Mono Bold Italic',
            fontSize: '1rem'
        },
        body1: {
            fontFamily: 'Make Sans',
            fontSize: '1.25rem'
            
        },
        body2: {
            fontFamily: 'Make Sans',
            fontSize: '1rem'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [mersad, spaceMonoBold, spaceMonoItalic, makeSansReg]
            }
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme} className="App" padding={2}>
            <Router>
                <CssBaseline />
                <Header />

                <Container sx={{ py: 5 }} >
                    <main>
                        <Routes>
                            <Route path='/' element={<About />} />
                            <Route path='/work' element={<Work />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/resume' element={<Resume />} />
                        </Routes>
                    </main>
                </Container>

                <Footer />
            </Router>
        </ThemeProvider>
        );
    }
    
    export default App;
