import './App.css';
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {BASE_URL} from "./utils/config"
import PreviousList from './components/previousList';
import EnterNumbers from './components/enterNumbers';

function App() { 

  const [previous, setPrevious] = useState([]);
  const loadPrevious = useCallback(async () => {
    try {
        const response = await axios.get(`${BASE_URL}/previous`);
        setPrevious(response.data);
    } catch (error) {
        console.error("Error fetching previous trees:", error);
    }
        }, []);

      useEffect(() => {
        loadPrevious().then(() => console.log('Previous trees loaded'));
      }, [loadPrevious]);

      return (
        //
        <div className='App'>
          <Router>
            <Routes>
                <Route path="/enternumbers" element={<EnterNumbers/>} />
                {/* <Route path="/previous" element={<PreviousList previous={previous}/>} /> */}
            </Routes>
          </Router>
        </div>
      );

}

export default App;
