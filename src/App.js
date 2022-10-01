import { CssBaseline } from '@mui/material';
import './assets/css/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <CssBaseline />
                {/* Header will go here */}

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
