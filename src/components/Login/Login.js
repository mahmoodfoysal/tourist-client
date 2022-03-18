import React from 'react';
import useFirebase from '../hooks/useFirebase';


const Login = () => {
    const {googleSignIn} = useFirebase();
    return (
        <div>
            <button onClick={googleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;