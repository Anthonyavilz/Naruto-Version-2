import React from "react";


class Jutsus extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return(
            <div>
                <h1>{this.props.val.sealOne}</h1>
                <h1>{this.props.val.sealTwo}</h1>
                <h1>{this.props.val.sealThree}</h1>
                <h1>{this.props.val.sealFour}</h1>
                <h1>{this.props.val.sealFive}</h1>
                <h1>{this.props.val.sealSix}</h1>
                <h1>{this.props.val.jutsuName}</h1> 
                <button class="editButton" onClick={this.props.editJutsu}>Edit</button> 
                <button class="deleteButton" onClick={this.props.deleteJutsu}>Delete</button>
            </div>
        )
    }
}

export default Jutsus;