import React, { Component } from 'react'
import {data} from './mock'
import './style.css'

export default class App extends Component {
  state={
    search: '',
    list:data,
  }
  render() {
    const onSearch =(e)=>{
      
      this.setState({search : e.target.value})
      const newData= data.filter((value)=>{
        let list = value.name.toLocaleLowerCase()
       return  list.includes(e.target.value.toLocaleLowerCase())
       
      });
      this.setState({list :newData})
    }
    return (
      <div className='wrapper'>
        <input type="text" onChange={onSearch}/>
        <select onChange={onSearch} id="selectList">
          <option  value="selectId">id</option>
          <option value="selectName">name</option>
          <option value="selectStatus">status</option>
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
            this.state.list.map((value)=>
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

