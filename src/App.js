import './assets/css/App.css';
import { CssBaseline, Container, Box } from '@mui/material';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/header';
import Footer from './components/footer';

// pages
import About from './pages/home-about';
import Work from './pages/work';
import Contact from './pages/contact';
import Resume from './pages/resume';

function App() {
    return (
        <Box className="App" padding={2}>
            <Router>
                <CssBaseline />
                <Header />

                <Container >
                    <main>
                        <Routes>
                            {/* TODO: add corresponding page to Route element */}
                            <Route path='/' element={<About />} />
                            <Route path='/work' element={<Work />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/resume' element={<Resume />} />
                        </Routes>
                    </main>
                </Container>

                <Footer />
            </Router>
        </Box>
        );
    }
    
    export default App;
