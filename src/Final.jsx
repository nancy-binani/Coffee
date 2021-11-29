import * as React from 'react';
import './index.css'
class Final extends React.Component{
    constructor(props){
        super(props)
    }
    render()
    {
        return(
            <div><br/><br/>
            <h1 style={{"margin-left":"24rem",fontSize:"4rem",color:"brown",fontFamily:"cursive"}}> Enjoy your {this.props.selectedCoffee} !! </h1>
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJr2zbEnlGfycuIZdyPpy279pRArt3ifaoA&usqp=CAU" style={{height:'9rem',width:'9rem'}}/>
            </div>
        )
    }
}
export default Final