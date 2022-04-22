import React from 'react';
import "./AuthOption.scss"
import { Button } from '@chakra-ui/react'

function AuthOptions( props ) {
    const { setSelectedForm } = props;
    
    return (
        <div className="auth-options">
            <h2>Millones de Canciones, gratis en Musicfy...</h2>
            <Button className="register" onClick={() => setSelectedForm("register")}>
                Registrate Gratis
            </Button>
            <Button className="login" onClick={() => setSelectedForm("login")} >
                Iniciar Sesión
            </Button>
        </div>
    );
}

export default AuthOptions;