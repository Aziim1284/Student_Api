import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Menu from './Component/menu'
import List from "./Component/list";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import UserReducer from "./redux/reducers/UserReducer";


function App(){
  const [uni, setUni] = useState([])

  useEffect(() => {
    axios.get('http://universities.hipolabs.com/search?country=United+States')
      .then(res => {
        // console.log('array: ',uni);
        setUni(res.data);
      }).catch(err => toast.error(err.message))
  }, [])

  return(
    <Provider store={createStore(UserReducer, uni )}>
      <BrowserRouter>
        <Menu/>
        <ToastContainer autoClose = {4000} position={'top-center'} />
        <Routes>
            <Route path={`/`} element={<List />}/>
            <Route path={`/list`} element={<List />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
