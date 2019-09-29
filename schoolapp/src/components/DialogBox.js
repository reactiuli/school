import React, {Component} from 'react';
import './DialogBox.css'



export default class DialogBox extends Component {

    
    render(){ 
        let dialog = (
            <div>
            <button 
            onClick={this.props.onClose}>X</button>
            <div>{this.props.children}</div>
            </div>
            );
        if (! this.props.isOpen){
            dialog=null;
        }

        return(
               <div className="DialogBox">
 
            {dialog} 





               </div>




        )
    }
}