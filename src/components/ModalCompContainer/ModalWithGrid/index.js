import React ,{Component} from 'react'
import {Modal , Container , Row , Col ,Button } from 'react-bootstrap'
import ModalC from '../ModalC/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class MydModalWithGrid extends Component{
constructor(props){
  super(props)
  this.state = {
    show:false,
    checked:false

  }
  this.handleCheck = this.handleCheck.bind(this);
}
handleCheck(e){
  this.setState({
   checked: e.target.checked
  })
}
render(){
  let newData;
  if(this.props.data && !this.state.checked){
     newData = Object.values(this.props.data).map((element,index)=>{
      return (
        
        <Row key={index} onClick={()=>this.setState({show:true})}> 
      <Col xs={6} md={4}>
       id : {element.id}
      </Col>
      <Col xs={6} md={4}>
        Phone Number :{element.phone_number}
      </Col>
      <Col xs={6} md={4}>
        Country id : {element.country_id}
      </Col>
     </Row>
    
      )
    })
  }
  else if(this.props.data && this.state.checked){
   newData =  Object.values(this.props.data).map((element,index)=>{
       if (element.id % 2 == 0){
         return (
            <Row key={index} onClick={()=>this.setState({show:true})}> 
      <Col xs={6} md={4}>
       id : {element.id}
      </Col>
      <Col xs={6} md={4}>
        Phone Number :{element.phone_number}
      </Col>
      <Col xs={6} md={4}>
        Country id : {element.country_id}
      </Col>
     </Row>
         )
       }
    })
  }
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.modalname}
          </Modal.Title>
          <input type="text" placeholder='Search' style={{marginLeft:'10px'}} onChange={this.filterSearch} />
          </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
           {newData}
          {this.state.show && <ModalC show={this.state.show} close={()=>this.setState({show:false})} />}   
           </Container>
        </Modal.Body>
        <Modal.Footer>
        <Container>
            <Row>
            <Col xs={6} md={3}>
            <input
            id ="checkbox_id"
             type="checkbox"
             checked={this.state.checked}
            onChange={this.handleCheck}
             />  
           <label htmlFor="checkbox_id">Even Id contacts</label>  
           </Col>
              <Col xs={6} md={3}>
                <Button style={{background:'#46139f'}}>All Contacts</Button>
              </Col>
              <Col xs={6} md={3}>
                <Button style={{background:'#ff7f50'}}>US Contacts</Button>
              </Col>
              <Col xs={6} md={3}>
              <Button style={{background:'white' , border:'1px solid #46139f' , color:'black'}} onClick={this.props.onHide}>Close</Button>
              </Col>
             
            </Row>
           </Container>
        </Modal.Footer>
      </Modal>
    );
  }
}