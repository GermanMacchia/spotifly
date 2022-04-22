import firebase from './utils/firebase'
import "firebase/compat/auth"
import React, { useState } from 'react'
import Auth from './pages/Auth'

function App() {
  const [user, setUser] = useState(null); 
  const [isloading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {
    if(!currentUser){
      setUser(null)
    }else{
      setUser(currentUser)
    }
    setIsLoading(false)
  })

  if(isloading){
    return null
  }
  return (
    !user ? <Auth /> : <UserLogged />
  );
}

function UserLogged(){

  const logout = ( ) => {
    firebase.auth().signOut()
  }

  return(
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh"
      }}>
        <h1>Usuario Logeado</h1>
        <button onClick={logout}>Cerrar Sesión</button>
      </div>
      
  )
}

export default App;
