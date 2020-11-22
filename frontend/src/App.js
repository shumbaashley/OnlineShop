import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/cart" component={HomeScreen}/>
          <Route exact path="/login" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
        </Container>
        </main>
        </Switch>
      <Footer/>
      </Router> 
  );
}

export default App;
