import React from "react";


class CreateJutsu extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <form>
                <input placeholder="Hand Sign 1" onChange={this.props.handleSealOne}></input>
                <br />
                <input placeholder="Hand Sign 2" onChange={this.props.handleSealTwo}></input>
                <br />
                <input placeholder="Hand Sign 3" onChange={this.props.handleSealThree}></input>
                <br />
                <input placeholder="Hand Sign 4" onChange={this.props.handleSealFour}></input>
                <br />
                <input placeholder="Hand Sign 5" onChange={this.props.handleSealFive}></input>
                <br />
                <input placeholder="Hand Sign 6" onChange={this.props.handleSealSix}></input>
                <br />
                <input placeholder="Jutsu Name" onChange={this.props.handleName}></input>
                <br />
                <button onClick={this.props.handleClick}>Add</button>
            </form>
        )
    }
}
//here I need to add design. I will need to import Austin's hands design and find a way to let the user select or type in the name of the hand seals to create the jutsu they want. 
export default CreateJutsu;