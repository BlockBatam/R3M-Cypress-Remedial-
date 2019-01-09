import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import NewsFeed from './Components/NewsFeed';
import LeftNavBar from './LeftNavBar';
import Home from './Components/Home';
import MyPhotos from './Components/MyPhotos';
import LogIn  from './Components/LogIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
        <Header />
        <LeftNavBar />
       
        <Route exact path='/home' component={Home}/>
        <Route path='/mynewsfeed' component={NewsFeed}/>
        <Route path='/myphoto' component={MyPhotos}/>    
        <Route path='/login' component={LogIn}/>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
