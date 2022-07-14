import { Component } from "react";
import colors from "./colors";
import Bike from "./Bike";

class CollorPicker extends Component {
    render () {
        return (
           <div className="color">
{
   colors.map(color => <Bike collor={color} />)
}
           </div>
        )
    }
}

export default CollorPicker;