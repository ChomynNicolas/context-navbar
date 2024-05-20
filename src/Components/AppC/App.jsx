import Principal from '../Principal/Principal'
import FormCont from '../FormCont/FormCont'
import Nav from '../Nav/Nav'
import Mycontext from '../Context/context'
import React, { useState } from 'react'

import './App.css';

function App() {
  const [user,setUser]= useState("Juan");




  return (
    <Mycontext.Provider value={{user,setUser}}>
      <Principal>
        <Nav/>
        <FormCont/>
      </Principal>
    </Mycontext.Provider>
  );
}

export default App;
