import { Component } from "react";
import colors from "./colors";

class Bike extends Component {
    render () {
        return (
           <h2>{   colors.map(color => <Bike collor={color} />)
}</h2> 
        )
    }

}
export default Bike;