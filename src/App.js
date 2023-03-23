
import { useEffect } from 'react';
import './App.css';
import Profile from './Profile/Profile';

// handleName a function return string who pass as a parameter

const handleName = (str) => {

  return str
}

function App() {

  return (
    <div className="App">

      <Profile
        fullName={handleName}
        bio='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fuga officiis rerum qui consectetur cupiditate quos ratione facilis facere optio!'
        profession='full stack developer' />
    </div>
  );
}

export default App;
