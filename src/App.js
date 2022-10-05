import './assets/css/App.css';
import { CssBaseline, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
    typography: {
        fontFamily: [
            'Mersad',
            'Space Mono Bold',
            'Space Mono Bold Italic',
            'Make Sans'
        ],
        h1: {
            fontFamily: 'Mersad'
        },
        h2: {
            fontFamily: 'Mersad'
        },
        h3: {
            fontFamily: 'Mersad'
        },
        h4: {
            fontFamily: 'Mersad'
        },
        h5: {
            fontFamily: 'Mersad'
        },
        h6: {
            fontFamily: 'Mersad'
        },
        subtitle1: {
            fontFamily: 'Space Mono Bold',
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

                <Container >
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
