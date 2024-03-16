import { Route, Routes } from 'react-router-dom';

import Posts from './components/pages/posts/Posts';
import BodyPost from "./components/pages/bodyPost/BodyPost";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/body/:id" element={<BodyPost />} />
        </Routes>
    );
};

export default App;