import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/arcdevelopment" component={() => <div>Home</div>} />
          <Route exact path="/arcdevelopment/services" component={() => <div>Services</div>} />
          <Route exact path="/arcdevelopment/customsoftware" component={() => <div>Custom Software</div>} />
          <Route exact path="/arcdevelopment/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/arcdevelopment/websites" component={() => <div>Websites</div>} />
          <Route exact path="/arcdevelopment/revolution" component={() => <div>The Revolution</div>} />
          <Route exact path="/arcdevelopment/about" component={() => <div>About Us</div>} />
          <Route exact path="/arcdevelopment/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/arcdevelopment/estimate" component={() => <div>Estimate</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
