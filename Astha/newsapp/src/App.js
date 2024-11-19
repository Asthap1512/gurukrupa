import React, { Component } from 'react';
import { Navbar } from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News pageSize={3} country="us" category="general" />} />
            <Route path="/business" element={<News pageSize={3} country="us" category="business" />} />
            <Route path="/entertainment" element={<News pageSize={3} country="us" category="entertainment" />} />
            <Route path="/science" element={<News pageSize={3} country="us" category="science" />} />
            <Route path="/sports" element={<News pageSize={3} country="us" category="sports" />} />
            <Route path="/technology" element={<News pageSize={3} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
