import { useContext, useEffect } from "react";
import { useHistory } from "react-router";

import { AuthContext } from "../../contexts/AuthContext";

import { Container } from './styles';
import Google from '../../assets/img/google.svg';
import Facebook from '../../assets/img/facebook.svg';

export function Login() {
    const history = useHistory();
    const { user, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);

    const handleGoogleSignIn = async () => {
        if(!user) await signInWithGoogle();
        
        setTimeout(() => {
            history.push('/home');
        }, 500);
    }

    // const handleFacebookSignIn = async () => {
    //     if(!user) await signInWithFacebook();
        
    //     setTimeout(() => {
    //         history.push('/home');
    //     }, 500);
    // }

    return (
        <Container>
            <div className="line"></div>
            <div className="title">
                <h1>EXPENSE</h1> 
                <h1>TRACKER</h1>
            </div>
            <main>
                <p>Entrar com</p>
                <button onClick={handleGoogleSignIn}>
                    <img src={Google} alt="Google" /> Entrar com Google
                </button>
                {/* <p>ou</p>
                <button onClick={handleFacebookSignIn}>
                    <img src={Facebook} alt="Facebook" /> Entrar com Facebook
                </button> */}
            </main>
        </Container>
    )
}
