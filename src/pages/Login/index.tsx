import { useContext } from "react";
import { useHistory } from "react-router";

import { AuthContext } from "../../contexts/AuthContext";

export function Login() {
    const history = useHistory();
    const { user, signInWithGoogle } = useContext(AuthContext);

    const handleSignIn = async () => {
        if(!user) await signInWithGoogle();
        
        setTimeout(() => {
            history.push('/home');
        }, 1000);
    }

    return (
        <div>
            <h1>Lorem ipsum ...</h1>
            <p>{user?.name}</p>

            <button onClick={handleSignIn}>Entrar com Google</button>
        </div>
    )
}
