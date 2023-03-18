import { BrowserRouter , Route , Routes } from "react-router-dom";
// import Profile from "./Components/Profile";
import AddUserMethods from "./Components/Index";

import AddClients from "./Pages/AddClients";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import ViewClients from "./Pages/ViewClients";
const { Module , PaymentSetup , Profile , Theme  }  = AddUserMethods;
import "./style/App.css";

const App = () => {

  
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> }   />
                <Route path="/user" element={ <Dashboard /> } >
                    <Route index path="view" element={ <ViewClients /> }  />
                    <Route path="add" element={ <AddClients /> } >
                        <Route index path="profile-setup"  element={ <Profile /> }  />
                        <Route index path="payment-setup" element={ <PaymentSetup /> }  />
                        <Route index path="theme-setup" element={ <Theme /> }  />
                        <Route index path="module-setup" element={ <Module /> }  />
                    </Route>
                </Route>
                <Route path="*" element={ <NotFound /> }   />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;