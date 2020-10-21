import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingPage from "./components/LoadingPage";
import TakeData from './components/TakeData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true

    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? 
          <LoadingPage />:
          <div>
            <Header />
            <TakeData />
            <Footer />
          </div>
        }
      </div>
    );
  }
}

export default App;
