import React, {Component} from 'react';
import './App.css';


function addlist(id,title ) {
  return {
    id,
    title
  }
}
  class App extends Component {

    

    state ={
      nameList: [],
      adressList:[],
      dateList:[],


      nName: '',
      nAdress: '',
      nDate: ''

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
      let newNameList = addlist (
        this.state.nameList.length+1,
        this.state.nName
        
      )

      let newAdressList = addlist (
        this.state.adressList.length+1,
        this.state.nAdress
        
      )

      let newDateList = addlist (
        this.state.dateList.length+1,
        this.state.nDate
        
      )
      
      this.setState({
        
        nameList: [...this.state.nameList, newNameList],
        adressList: [...this.state.adressList, newAdressList],
        dateList: [...this.state.dateList, newDateList],

       
        
        nName: '',
        nAdress: '',
        nDate: ''
        
      })

      console.log(this.state.nName)
      
      console.log(newNameList.title);
      console.log(this.state.nameList);
      
      
      
    }
    
   

    render(){
      return (

        <div className="App">
          
          

                <input 
                      type="text"
                      placeholder="Name"
                      value={this.state.nName}
                      onChange={(e)=>
                              this.onChangeName(e)}
                              
                />

                <input 
                      type="text" 
                      placeholder="Adress"
                      value={this.state.nAdress}
                      onChange={(e)=>
                            this.onChangeAdress(e)}
                      />

                <input 
                      type="text" 
                      placeholder="Date"
                      value={this.state.nDate}
                      onChange={(e)=>
                              this.onChangeDate(e)}
                        />

                  
                  <button 
                    onClick={this.addClick}
                  >
                      ADD
                      </button>

          

                

                
         <table>
                  <thead>
                          <tr>
                            <th>Name</th>
                            <th>Adress</th>
                            <th>Date</th>
                          </tr>
                  </thead>
                  


                  
                  <tbody className="tableData">
                    
                
            <th>
              
                  {this.state.nameList.map((item)=>{
                     return(
                       
                    <tr key={item.id} 
                    className="tName"
                    > {item.title} </tr> 
                      )
                  })
                  
                 }
                
            </th> 
           

            
                 
            <th>
                   {this.state.adressList.map((item)=>{
                    return(
                      <tr 
                     key={item.id}
                     className="tName"
                          >{item.title} 
                      </tr>
                     )
                 })
                 }
            </th>
                    
            <th>
                    {this.state.dateList.map((item)=>{
                   return(
                      <tr 
                     key={item.id}
                     className="tName"
                          >{item.title} 
                      </tr>
                      )
                  })
                   } 

           </th>              
                            
                            
                  
                  
                  </tbody>
                  
                  
                  
         </table>
     






        </div>

      )
    }
  }
  


export default App;
