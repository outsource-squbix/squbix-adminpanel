import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavbarTop from "./Screens/Navbar";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import CertificateDetails from "./Screens/CertificateDetails";
import WebMessages from "./Screens/WebMessages";

function App() {
  return (
    <>
      <NavbarTop />
      <Switch>
        <Route exact path="/admin" component={Home} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/certificate_details" component={CertificateDetails} />
        <Route exact path="/admin/web_messages" component={WebMessages} />
      </Switch>
    </>
  );
}

export default App;
