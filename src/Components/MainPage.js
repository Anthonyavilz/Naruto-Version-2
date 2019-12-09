import React from "react";
import StylesVillages from "./StyleVillages";
import CreateJutsu from "./CreateJutsu";
import Jutsus from "./User-Created/Jutsus";
import Axios from "axios";


class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: '',
      sealOne: '',
      sealTwo: '',
      sealThree: '',
      sealFour: '',
      sealFive: '',
      sealSix: '',
      jutsuName: ''
    }
  }

  changeToMain = () => {
    this.setState({ page: 'main-page' })
  }

  changeToStyleVillages = () => {
    this.setState({ page: 'style-villages' })
  }

  changeToCreateJutsu = () => {
    this.setState({ page: 'create-jutsu' })
  }

  changeToListNewJutsu = () => {
    this.setState({ page: 'new-jutsu' })
  }

  handleSealOne = e => {
    this.setState({ sealOne: e.target.value })
  }

  handleSealTwo = e => {
    this.setState({ sealTwo: e.target.value })
  }

  handleSealTHree = e => {
    this.setState({ sealThree: e.target.value })
  }

  handleSealFour = e => {
    this.setState({ sealFour: e.target.value })
  }

  handleSealFive = e => {
    this.setState({ sealFive: e.target.value })
  }

  handleSealSix = e => {
    this.setState({ sealSix: e.target.value })
  }

  handleName = e => {
    this.setState({ jutsuName: e.target.value })
  }

  handleClick = e => {
    const { sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName } = this.state;
    e.preventDefault();
    Axios.post("/api/naruto/", {
      sealOne,
      sealTwo,
      sealThree,
      sealFour,
      sealFive,
      sealSix,
      jutsuName

    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  updateUserJutsu = newArr => {
    this.setState({ownJutsu: newArr})
}

  editJutsu = () => {
    const {sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName} = this.state;
    Axios.put(`/api/naruto/${this.props.id}`, {
        sealOne,
        sealTwo,
        sealThree,
        sealFour,
        sealFive,
        sealSix,
        jutsuName
    })
    .then(res => {
        this.props.updateUserJutsu(res.data);
    })
}

deleteJutsu = () => {
    Axios.delete(`/api/naruto/${this.props.id}`).then(Response => {
        console.log(Response.data);
        this.updateUserJutsu(Response.data);
    })
}


  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.page === "" ?
          <>
            <p class='siteInfo'>Insert text here, this will be the describing text about the site and the purpose</p>
            <button onClick={this.changeToMain}>Home</button>
            <button onClick={this.changeToStyleVillages}>Styles and Villages</button>
            <button onClick={this.changeToCreateJutsu}>Create</button>
            <button onClick={this.changeToListNewJutsu}>List of Jutsu</button>
          </>
          :

          this.state.page === 'create-jutsu'
            ?
            (<CreateJutsu 
              sealOne={this.sealOne}
              sealTwo={this.sealTwo} 
              sealThree={this.sealThree} 
              sealFour={this.sealFour} 
              sealFive={this.sealFive} 
              sealSix={this.sealSix} 
              jutsuName={this.jutsuName}  
              handleSealOne={this.handleSealOne}
              handleSealTwo={this.handleSealTwo}
              handleSealTHree={this.handleSealTHree}
              handleSealFour={this.handleSealFour}
              handleSealFive={this.handleSealFive}
              handleSealSix={this.handleSealSix}
              handleName={this.handleName}
              handleClick={this.handleClick}
              />)
            :
            this.state.page === 'new-jutsu'
              ?
              (<Jutsus  
                editJutsu={this.editJutsu} 
                deleteJutsu={this.deleteJutsu}
                />)
              :
              this.state.page === 'style-villages'
                ?
                (<StylesVillages  />)
                :
                this.state.page === 'main-page'
                  ?
                  (<MainPage  />)
                  :
                  null
        }

      </div>
    )
  }
}
// here I need to create the nav bar and add the 'linking' to the other components
export default MainPage;