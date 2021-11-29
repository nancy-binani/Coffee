import React from "react";
import data from "./data.js";
import "./index.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
class Options extends React.Component {
  constructor(props){
    super(props);
    
  }

  handleSelectCoffee(e){
    let type=e.target.value;
    let ho=e.target.attributes.hot;
    let co=e.target.attributes.cold;
    console.log(ho)
    console.log(co)
    this.props.handleStateChange(type,ho,co)
    
  }
  render() {
    return (
      <div className="CoffeeListContainer">
        {data.map((user) => (
        
       
            <Card className="coffeeCard">
                    <CardMedia
                        component="img"
                        height="170"
                        image={user.pic}
                        alt="bl"
                    />
                    <CardContent style={{paddingLeft:'80px',color:'#000000'}}>
                        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'cursive', fontWeight:'bold'}}>
                            {user.name}
                        </Typography>
                        
                    </CardContent>
                    <CardActions className="orderBtnContainer">
                        <Button onClick={e=>this.handleSelectCoffee(e)}   value={user.name} hot={user.hot} cold={user.cold} style={{border:'1px solid blue',height:'100%', width:'10rem'}}>Select</Button>
                    </CardActions>
                </Card>
                 ))}
      </div>
    );
  }
}

export default Options;
