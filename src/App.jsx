import React, { Component } from 'react'
import {data} from './mock'
import './style.css'

export default class App extends Component {
  state={
   
   
    select:'id',
    data:data,
  }
  render() {
    const onChange =(e)=>{
      const list= data.filter((value)=>{
        if(Number.isInteger(value[this.state.select])) {
          let name = value[this.state.select].toString().toLocaleLowerCase();
          return  name.includes(e.target.value.toLocaleLowerCase());
        }else{
            let name = value[this.state.select].toLocaleLowerCase();
       return  name.includes(e.target.value.toLocaleLowerCase());
        }
      });
      this.setState({[e.target.name]: e.target.value, data:list})
    };
    const onSelect = (e) => {
      this.setState({select: e.target.value})
    };
    return (
      <div className='wrapper'>
        <input type="text" onChange={onChange}/>
        <select onChange={onSelect} id="">
          <option  value="id">id</option>
          <option value="name">name</option>
          <option value="status">status</option>
        </select>
        <table border='1' 
        style={{borderCollapse:'collapse', width: '300px'}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.data.map((value)=>
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.status}</td>
              </tr>
            )
            }

          </tbody>
        </table>
        
      </div>
    )
  }
}

