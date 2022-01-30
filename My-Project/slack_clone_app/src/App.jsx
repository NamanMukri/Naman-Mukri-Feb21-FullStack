import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from '../src/Components/Header'
import SideBar from './Components/SideBar';
import styled from 'styled-components';
import Chat  from './Components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
 import { auth } from './firebase';
import Login from './Components/Login'
import Spinner from 'react-spinkit';
function App() {
  const [user,loading]=useAuthState(auth);
  console.log(user)
  if(loading){
    return(
      <AppLoading>
        <AppLoadingContent>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"  alt="" />
          <Spinner
          name='ball-spin-fade-loader' 
          color='purple'
          fadeIn='none'
          />
        </AppLoadingContent>
      </AppLoading>
    )
  }
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? 
      (<>        <Routes>        
        <Route path='/' element={<Login/>}>
          
        </Route>                     
      </Routes>
      </>
) : (
      
      <>
      <Header/>
      <AppBody>
      <SideBar/>
      
      <Routes>        
        <Route path='/' element={<Chat/>}>
          
        </Route>                     
      </Routes>
      
      </AppBody>
      </>)}

      </BrowserRouter>
      </div>    
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  top:60px;  
  width:100%;
  
`
const AppLoading = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width:100%;

`
const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`



