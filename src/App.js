import { CssBaseline } from '@mui/material';
import './assets/css/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/header';

function App() {
    return (
        <Router>
            <div className="App">
                <CssBaseline />
                <Header />

                <main>
                    <Routes>
                        {/* TODO: add corresponding page to Route element */}
                        <Route path='/' element={<></>} />
                        <Route path='/work' element={<></>} />
                        <Route path='/contact' element={<></>} />
                        <Route path='/resume' element={<></>} />
                    </Routes>
                </main>

                {/* Footer will go here */}
            </div>
        </Router>
        );
    }
    
    export default App;
