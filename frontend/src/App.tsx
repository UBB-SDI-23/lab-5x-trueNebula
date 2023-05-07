import {HashRouter, Route, Routes} from "react-router-dom";
import Filter from "./Pages/filter";
import Clients from "./Pages/clients";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" Component={Clients}/>
                <Route path="/filter" Component={Filter}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
