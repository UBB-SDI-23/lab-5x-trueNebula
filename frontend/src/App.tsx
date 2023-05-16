import React, {createContext, useContext, useState} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Filter from "./Pages/filter";
import Clients from "./Pages/clients";
import SignIn from "./Pages/signin";

export interface Login {
    username?: string;
    password?: string;
}

function App() {
    

    const LoginContext = createContext<Login>({username: "", password: ""});
    const LoginMode = useContext(LoginContext);
    const [userlogin, setLogin] = useState(LoginMode);

    const handleLogin = (data: Login) => {
        setLogin(data);
    }
    console.log(userlogin)

    return (
        <LoginContext.Provider value={userlogin}>
            {JSON.stringify(userlogin) !== JSON.stringify({username: "", password: ""}) ?    
                <HashRouter>
                    <Routes>
                        <Route path="/" Component={Clients}/>
                        <Route path="/filter" Component={Filter}/>
                    </Routes>
                </HashRouter> :
                <SignIn setLoginCallback = {(data: Login) => handleLogin(data)}></SignIn>
            }
        </LoginContext.Provider>
    
    );
}

export default App;
