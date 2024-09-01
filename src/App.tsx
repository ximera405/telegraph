import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage } from './MainPage';

function App(): JSX.Element {
    return (
        <div className="app-container">
            <div className='main'>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
