import React from 'react';
import { Button, Input, Icon, FormLabel, InputLeftElement, InputGroup, FormHelperText, FormControl, Stack } from '@chakra-ui/react'
import { EmailIcon, LockIcon, QuestionIcon } from '@chakra-ui/icons'
import firebase from '../../../utils/firebase'
import 'firebase/auth'
import './RegisterForm.scss'

const onSubmit = (e) =>{
    e.preventDefault()
    console.log("Formulario Enviado")
    
}
export default function RegisterForm( {setSelectedForm} ) {
    return (
        <div className="register-form">
            <h1>Empieza a escuchar con una cuenta de Musicfy gratis.</h1>
                <form onSubmit={onSubmit}>
                    <FormControl>
                        <Stack spacing={3}>    
                            <InputGroup> 
                                <InputLeftElement color='whiteAlpha.700' children={<QuestionIcon />} />
                                <Input id='userName' type='text' placeholder="User" color='whiteAlpha.400' />
                            </InputGroup>
                            <InputGroup> 
                                <InputLeftElement color='whiteAlpha.700' children={<LockIcon />} />
                                <Input id='password' type='password' placeholder="Password" color='whiteAlpha.400' />
                            </InputGroup>
                            <InputGroup> 
                                <InputLeftElement color='whiteAlpha.700' children={<EmailIcon />} />
                                <Input id='email' type='email' placeholder="Email" color='whiteAlpha.400' />
                            </InputGroup> 
                            {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
                            <Input className="button" type="submit" />
                        </Stack>
                    </FormControl>
                </form>
                <div className="register-form__options">
                    <p onClick={() => setSelectedForm(null)}>Volver</p>
                    <p>
                        ¿Ya tienes Musicfy?{" "}<span onClick={() => setSelectedForm("login")}>Iniciar sesión</span>
                    </p>
                </div>

        </div>
    );
}

