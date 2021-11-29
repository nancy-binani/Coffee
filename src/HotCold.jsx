import React from "react";
import "./index.css";
import Button from "@mui/material/Button";
class HotCold extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      coffee: "",
     
    };
  }

  componentDidMount = async () => {
    await this.setState({
      coffee: this.props.selectedCoffee,
    
    });
  };

  render() {
    return (
      <div className="priceContainer">
        <h2 className="heading1" style={{ paddingLeft: "19.3rem" ,marginTop:'4rem',marginBottom:'1rem',color:'brown'}}>You have selected :- {this.state.coffee}</h2>

        <div className="hotColdBtnContainer" style={{ paddingLeft: "19.3rem" }}>
          <Button
            style={{
              border: "1px solid crimson",
              color: "crimson",
              width: "10rem",
            }}
          >
            Hot :{this.props.hotPrice.nodeValue}
          </Button>
          <Button style={{ border: "1px solid blue", width: "10rem" }}>
            Cold :{this.props.coldPrice.nodeValue}
          </Button>
        </div>
      </div>
    );
  }
}
export default HotCold;
