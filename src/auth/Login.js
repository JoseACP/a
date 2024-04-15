import React, { useState } from "react";
import * as Components from './Components';
import { useNavigate } from 'react-router-dom'; 

function Login() {
    const [signIn] = React.useState(true);


        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const history = useNavigate(); // Inicializa useNavigate para el enrutamiento

        const handleFormSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch('https://ujed-api.onrender.com/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                const data = await response.json();
                if (response.ok) {
                    // Guardar el token y el ID en localStorage
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    // Redirigir al usuario a la pantalla de inicio (Home)
                    history('/Home');
                    console.log('amlo2')
                } else {
                    console.error('Error en la respuesta de la API:', data);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
     return(

        <Components.body>
            <Components.Container>
            
            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleFormSubmit}>
                 <Components.LogoIcon src="https://lh5.googleusercontent.com/proxy/YDiDPVRe0SUyevRGyUh8pCHPQEBhWINR4rNUrXgf_0NzbN-g0CQ4-A8K1nrvQe1XXU0bywnjdugnaEsPq6fdLbQkw00fnn57Y3UCFCw" alt="Logo" />
                     <Components.Title>INICIAR SESION</Components.Title>
                     <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                     <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                     <Components.Anchor href='#'></Components.Anchor>
                     <Components.Button type="submit">Ingresar</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>
        </Components.Container>
        </Components.body>
         
     )
}

export default Login;