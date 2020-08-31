import React, { Component } from 'react';
import Modalbutton from './components/ModalCompContainer/index'
import axios from 'axios'; 
import {debounce} from 'lodash'
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
      UsData:{},
      pageAll:1,
      value:'',
      pageUs:1
  }
}

getAllData(){
  axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
    companyId: '171',
    page:this.state.pageAll
  }
})
.then((res) => {
 this.setState({
  Data:res.data.contacts
  })
})
.catch((error) => {
  console.error(error)
})
}

getUsData(){
axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
    companyId: 171,
    countryId:226,
    page:this.state.pageUs
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
 
componentDidMount(){
   this.getAllData()
   this.getUsData()
 }
 
// debounce method
callApi=debounce(()=>{
  axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
    companyId: 171,
    query: this.state.value
  }
})
.then((res) => this.setState({Data:res.data.contacts})
)
.catch((error) => {
  console.error(error)
})

},300)

callApiUs=debounce(()=>{
  axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
    companyId: 171,
    countryId:226,
    query: this.state.value
  }
})
.then((res) => this.setState({UsData:res.data.contacts})
)
.catch((error) => {
  console.error(error)
})

},300)

filterSearch =(event)=>{
  this.setState({value:event.target.value})
  this.callApi()
  this.callApiUs()
  }

  //pageination
  pageIncrementAll =()=>{
    axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
      companyId: '171',
      page:this.state.pageAll 
    }
  })
  .then((res) => {
      this.setState({
      ...this.state,
      Data:{...this.state.Data,...res.data.contacts},
      pageAll:this.state.pageAll + 1
      });
    
    console.log(this.state.Data,'NewData')
  })
  .catch((error) => {
    console.error(error)
  })
}
pageIncrementUs=()=>{
  axios.get(url , { headers: {Authorization : `Bearer ${token}`} , params: {
    companyId: 171,
    countryId: 226,
    page:this.state.pageUs 
  }
 })
 .then((res) => {
 this.setState({
   ...this.state,
  UsData:{...this.state.UsData, ...res.data.contacts},
  pageUs:this.state.pageUs + 1
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
        <Switch>
       <Route exact path='/'><Modalbutton modalName={'Modal A'} color={'#46139f'} data={this.state.Data} page={this.pageIncrementAll} search={this.filterSearch}  />
       <Modalbutton modalName={'Modal B'} color={'#ff7f50'} data={this.state.UsData} page={this.pageIncrementAll} search={this.filterSearch}  /></Route>
     
        <Route  path ='/All'><Modalbutton modalName={'Modal A'} color={'#46139f'} data={this.state.Data} page={this.pageIncrementAll} search={this.filterSearch} /></Route>
        <Route  path ='/Us'><Modalbutton modalName={'Modal B'} color={'#ff7f50'} data={this.state.UsData} page={this.pageIncrementUs} search={this.filterSearch} /></Route>

      </Switch>
      </div>
      </Router>
    )
  }
}
