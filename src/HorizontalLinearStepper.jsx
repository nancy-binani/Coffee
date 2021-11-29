import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Options from './Options';
import Counter from './Counter';
import Final from './Final'
import "./index.css";
import HotCold from './HotCold'
const steps = ["Order Your coffee", "Hot Or Cold", "Add Sugar"];

class HorizontalLinearStepper extends React.Component{
  constructor(props){
    super(props)
    this.state={
      activeStep:0,
      selectedCoffee:"Ristreto",
      
    }
  }
  handleStateChange = async(type,ho,co) => {
      await this.setState({
        selectedCoffee:type,
        hotPrice:ho,
        coldPrice:co
      })
  }
   handleNext = () => {
   this.setState({activeStep:this.state.activeStep+1})
  };
   handleBack = () => {
    this.setState({activeStep:this.state.activeStep-1})
  };
     handleReset = () => {
      this.setState({activeStep:0})
  };
  
  render() {
    return (
      <div>
     
         <section>
              
              {
                  this.state.activeStep>2?<>
                  <div className="order">
                 
                 <Final selectedCoffee={this.state.selectedCoffee}/>
                  </div>
                  </>:<Box className="stepper" sx={{ width: '70%' }}>
                      <Stepper activeStep={this.state.activeStep} className="StepperContainer">
                          {steps.map((label, index) => {
                              const stepProps = {};
                              const labelProps = {};
                              return (
                                  <Step key={label} {...stepProps} >
                                      <StepLabel className="steplabel" {...labelProps}>{label}</StepLabel>
                                  </Step>
                              );
                          })}
                      </Stepper>
                      <React.Fragment>
                          {this.state.activeStep === 0 ? <Options handleStateChange={this.handleStateChange} /> : this.state.activeStep === 1 ? <HotCold selectedCoffee={this.state.selectedCoffee} hotPrice={this.state.hotPrice} coldPrice={this.state.coldPrice} /> : <React.Fragment>
                              <Counter/>
                              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                                  <Box sx={{ flex: '1 1 auto' }} />
                                  <Button onClick={this.handleReset}>Reset</Button>
                              </Box>
                          </React.Fragment>}
                          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                              <Button
                                  color="inherit"
                                  disabled={this.state.activeStep === 0}
                                  onClick={this.handleBack}
                                  sx={{ mr: 1 }}
                              >
                                  Back
                              </Button>
                              <Box sx={{ flex: '4 4 auto' }} />
                              <Button onClick={this.handleNext}>
                                  {this.state.activeStep === steps.length - 1  ? 'Finish' : 'Next'}
                              </Button>
                          </Box>
                      </React.Fragment>
                  </Box>
              }
             
          </section>
          </div>
  )
  }
}




export default HorizontalLinearStepper;
