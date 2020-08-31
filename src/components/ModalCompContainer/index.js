import React, { Component } from 'react'
import  MydModalWithGrid from './ModalWithGrid/index'
import { Button } from 'react-bootstrap'

  class Modalbutton extends Component {
    constructor(props){
        super(props);
      this.state = {
          modalshow:false,
      }
  }
  
  onClose =()=>{
    this.setState({modalshow:false})
          window.location.href='/'
  }
        render() {          
            return (
                <div>
                     <Button style={{background:this.props.color}} variant="primary" onClick={() => this.setState({modalshow:true})}>
                     {this.props.modalName}
                    </Button>
                    <MydModalWithGrid show={this.state.modalshow} 
                    onHide={this.onClose } 
                    modalname={this.props.modalName} 
                    data={this.props.data}
                    page={this.props.page}
                    search={this.props.search}/>
                </div>
            )
        }
    }
    


  export default Modalbutton
  
  