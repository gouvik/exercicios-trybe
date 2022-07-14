import { Component } from "react";

class Boat extends Component {
    render () {
        return (
            <h2>Hi! I am a {this.props.color} Boat!</h2>
        )
    }
}

export default Boat;