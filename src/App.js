import React, { Component } from 'react';
import Modalbutton from './components/ModalCompContainer/index'
import axios from 'axios'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const url = 'https://api.dev.pastorsline.com/api/contacts.json'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
  

export default class App extends Component {
  constructor(props){
    super(props);
  this.state = {
      modalshow:false,
      Data:{},
      UsData:{}
  }
}
 componentDidMount(){
    axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
      companyId: '171',
    }
  })
  .then((res) => {
console.log(res.data,'alldatatataata')
   this.setState({
    Data:res.data.contacts
    })
  })
  .catch((error) => {
    console.error(error)
  })

   axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
    companyId: '171',
    countryId:'226',
  }
 })
 .then((res) => {
 this.setState({
  UsData:res.data.contacts
  })
 })
 .catch((error) => {
  console.error(error)
 })


}
    render() {
    return (
      <Router>
      <div className='App'>
        <Link to ='/All'><Modalbutton modalName={'Modal A'} color={'#46139f'} data={this.state.Data} /></Link>
        <Link to='/Us'><Modalbutton modalName={'Modal B'} color={'#ff7f50'} data={this.state.UsData} /></Link>
      </div>
      </Router>
    )
  }
}
