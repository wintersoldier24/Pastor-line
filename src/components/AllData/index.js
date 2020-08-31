import React, { Component } from 'react'
import  MydModalWithGrid from '../ModalCompContainer/ModalWithGrid/index'
import { Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  class AllData extends Component {
    constructor(props){
        super(props);
      this.state = {
          modalshow:false,
      }
  }
  
        render() {          
            return (
                <Router>
                    <Switch>
                <div>
                    <Route path='/All'> <Button style={{background:this.props.color}} variant="primary" onClick={() => this.setState({modalshow:true})}>
                     {this.props.modalName}
                    </Button>
                    <MydModalWithGrid show={this.state.modalshow} 
                    onHide={() => this.setState({modalshow:false})} 
                    modalname={this.props.modalName} 
                    data={this.props.data}
                    page={this.props.page}
                    search={this.props.search} />
                    </Route>
                </div>
                </Switch>
                </Router>
            )
        }
    }
    


  export default AllData
  
  