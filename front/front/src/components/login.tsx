import React, { useState } from 'react';
import { Redirect } from 'react-router'

const Login = (): JSX.Element => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [connected, setConnected] = useState<boolean>(false);

    async function sendLogin() {
        console.log("Axios");
        setConnected(true);
    }

    if (connected)
        return (
            <Redirect to="/app" />
        );
    return (
        <form className="login" onSubmit={() => {sendLogin()}}>
            <label>Login</label>
            <input value={login} onChange={(e) => {setLogin(e.target.value)}} type="text" placeholder="login" required/>
            <label>Password</label>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password" required/>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Login;