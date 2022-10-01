import './assets/css/App.css';
import { CssBaseline, Box } from '@mui/material';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/header';
import Footer from './components/footer';

// pages
import About from './pages/home-about';

function App() {
    return (
        <Box className="App" padding={2}>
            <Router>
                <CssBaseline />
                <Header />

                <main>
                    <Routes>
                        {/* TODO: add corresponding page to Route element */}
                        <Route path='/' element={<About />} />
                        <Route path='/work' element={<></>} />
                        <Route path='/contact' element={<></>} />
                        <Route path='/resume' element={<></>} />
                    </Routes>
                </main>

                <Footer />
            </Router>
        </Box>
        );
    }
    
    export default App;
