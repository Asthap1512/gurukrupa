import React, { Component } from 'react';
import { Navbar } from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 5;

  state = {
    progress:0
  }
  setProgress = (progress) => {
    console.log("Progress:", progress); // Debugging to confirm it's working
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress= {this.state.progress}
        
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country="us" category="sports" />} />
            <Route exact path="/techology" element={<News setProgress={this.setProgress} key="techology" pageSize={6} country="us" category="techology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;