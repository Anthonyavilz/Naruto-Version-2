import React from 'react';
import MainPage from './MainPage'

class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        page: ''
      }
  
    }
  
  
    render() {
      return(
        <div>
            <h1 class="main-text">World of Naruto: Jutsu Maker</h1>
            {this.state.page === '' ? <button onClick={() => this.setState({page: 'home'})}>Home</button> : null}
         
            {this.state.page === 'home'
            ?
            (<MainPage page={this.state.page} />)
            :
            null
            }
        </div>
      )
    }
  }
  
  export default Home;