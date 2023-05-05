import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Leaderboard from './Leaderboard';
import Newquestion from './Newquestion';
import { fetchData } from '../actions/shared'
import MainPage from './MainPage';
import Login from './Login';
import Error404 from './Error404';
import Poll from './Poll';
import Navigationbar from './Navigationbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.userAuth);

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <>
      <Router>
        {auth && <Navigationbar />}
        <div className="App">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/add" element={<Newquestion />} />
            <Route exact path="/questions/:question_id" element={<Poll />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;