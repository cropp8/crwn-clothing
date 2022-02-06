import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/current-user/current-user.context';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          this.setState({ 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }});
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.state.currentUser ? (<Redirect to='/' />) : (<Auth/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
