import * as React from 'react';
import './index.css'

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    ic = () => {
        this.setState({
            count:this.state.count+1
        })
    };
    dc = () => {
        this.setState({
            count:this.state.count>0 ? this.state.count-1 : 0
        })
    };
    render()
    {
        let {count}=this.state
        return(
           
               
           <div class="buttons">
              
            <button className="btn1" onClick = {this.dc}>-</button>
            <img className="img1" src="https://images.creativemarket.com/0.1.0/ps/8626637/1820/1214/m1/fpnw/wm0/spoon-sugar-powder-icon-add-teaspoon-ingredients-cooking-food-baking-thin-line-web-symbol-on-white-background-editable-stroke-vector-illustration-eps10-.jpg?1593353358&s=64694631cb5248eb200e5f2b671a0dec"/>
            <h2 className="h2">{count} spoons</h2>
            <button className="btn2" onClick = {this.ic}>+</button>
           
          </div>
        
            
        )
    }
}
export default Counter