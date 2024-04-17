import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { Context } from '../../App';
import { useContext } from 'react';
import { initializeApp } from "firebase/app"; //we  are free, the logic is there, create then have original elements
import { AppConfig } from '../strictlyData/AppConfig';



const app = initializeApp(AppConfig);

 const auth = getAuth(app);

//we must handle auth compacitvely, data flow streamlined context update state in components addicted to that state, instead of many listeners or many places to re-render conditionally




export const GoogleSignOut = () => {




  

    const signOutFunction = () => {
  
      signOut(auth).then(() => {
        console.log("logged out")
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error.message)
      });
  
    }
  


    return <button className='App__signOut' onClick={() => {signOutFunction()}}>Sign out</button>
  

  
  }