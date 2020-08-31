import React, { Component } from 'react'
import  MydModalWithGrid from '../ModalCompContainer/ModalWithGrid/index'
import { Button } from 'react-bootstrap'

  class UsData extends Component {
    constructor(props){
        super(props);
      this.state = {
          modalshow:false,
      }
  }
  
        render() {          
            return (
                <div>
                     <Button style={{background:this.props.color}} variant="primary" onClick={() => this.setState({modalshow:true})}>
                     {this.props.modalName}
                    </Button>
                    <MydModalWithGrid show={this.state.modalshow} 
                    onHide={() => this.setState({modalshow:false})} 
                    modalname={this.props.modalName} 
                    data={this.props.data}
                    page={this.props.page}
                    search={this.props.search} />
                </div>
            )
        }
    }
    


  export default UsData
  
  