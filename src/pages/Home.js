import React from 'react';
import Header from '../components/Header.js'
import FriendCard from '../components/FriendCard.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <h1> My header!!</h1>
          <h1> Home Page</h1>
      </div>
    );
  }
}

export default Home;