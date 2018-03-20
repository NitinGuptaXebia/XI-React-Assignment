import React, {Component} from "react";
import Header from "./components/Header";
 
export class App extends Component {
    
    render() {
        return(
            <div>
                 <Header appName="React Assignment by Nitin Gupta (XI-438)"/>
                 <div>
                    {this.props.children}
                </div>
            </div>
        )
    } 
    
}