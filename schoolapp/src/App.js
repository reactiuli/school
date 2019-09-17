import React, {Component} from 'react';
import './App.css';


// function addlist(addName, addAdress, addDate ) {
//   return {
//     addName,
//     addAdress,
//     addDate
//   }
// }
  class App extends Component {

    

    state ={
      nName: '',
      nAdress: '',
      nDate: '',

      addName:'',
      addAdress:'',
      addDate:''
      
    
    }

    onChangeName=(e)=>{
        this.setState({
        nName: e.target.value
      })
    }

    onChangeAdress=(e)=>{
      this.setState({
      nAdress: e.target.value
    })
  }

  onChangeDate=(e)=>{
    this.setState({
    nDate: e.target.value
  })
}

    addClick=()=>{
      this.setState({
        addName: this.state.nName,
        nName: '',
        addAdress: this.state.nAdress,
        nAdress: '',
        addDate: this.state.nDate,
        nDate: '',
      })

    }


    render(){
      return (

        <div className="App">
          <header>

                <div className="name">
                    <input 
                      type="text" 
                      placeholder="Name"
                      value={this.state.nName}
                      onChange={(e)=>
                        this.onChangeName(e)}
                    />
                
                </div>
                

                <div className="adress">
                  <input 
                  type="text" 
                  placeholder="Adress"
                  value={this.state.nAdress}
                  onChange={(e)=>
                        this.onChangeAdress(e)}
                  />
                </div>

                <div className="date">
                  <input 
                  type="text" 
                  placeholder="Date"
                  value={this.state.nDate}
                  onChange={(e)=>
                        this.onChangeDate(e)}
                  />
                </div>

                <button onClick={this.addClick}
                >
                ADD
                </button>

          </header>

         <table>
                  <thead>
                          <tr>
                            <th>Name</th>
                            <th>Adress</th>
                            <th>Date</th>
                          </tr>
                  </thead>
                  
                  <tbody className="tableData">
                  <tr>
                            <th className="tName">{this.state.addName}</th>
                            <th className="tAdress">{this.state.addAdress}</th>
                            <th className="tDate">{this.state.addDate}</th>
                  </tr>
                  </tbody>
                  
         </table>
     






        </div>

      )
    }
  }
  


export default App;
