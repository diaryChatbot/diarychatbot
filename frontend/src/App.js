import { Route, Routes } from 'react-router-dom';
import Board from './pages/board/Board';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'board'} element={<Board />} />
                {/* <Route path={'login'} element={<Login />} /> */}
                {/* <Route path={'main'} element={<Main />} /> */}
                {/* <Route path={'regist'} element={<Regist />} /> */}
            </Routes>
        </div>
    );
};

export default App;
