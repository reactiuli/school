import React, {Component,Fragment} from 'react';
import './App.css';
import DialogBox from './components/DialogBox';


function addlist(id,title ) {
  return {
    id,
    title
  }
}

function objArr(nameList, adressList,dateList) {
  return { 
  nameList,
  adressList,
  dateList
 }
}
  class App extends Component {

   state ={
      nameList: [],
      adressList:[],
      dateList:[],
      newArr:[],
      
      nName: '',
      nAdress: '',
      nDate: '',

      isOpen:false
      

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
      
     let newItem= objArr(newNameList,newAdressList,newDateList)

      this.setState({
        
        
        newArr: [...this.state.newArr, newItem],
        
        nName: '',
        nAdress: '',
        nDate: ''
        
      })

      
    }
    
   

    render(){
      return (

        <div className="App">
          

          <DialogBox 
          isOpen={this.state.isOpen}
          onClose={(e)=> this.setState({
            isOpen:false
          })}
          >
           სკოლის მოსწავლეების სია
           
          </DialogBox>


                <input 
                      type="text"
                      placeholder="School Name"
                      value={this.state.nName}
                      onChange={(e)=>
                              this.onChangeName(e)}
                              
                />

                <input 
                      type="text" 
                      placeholder="School Adress"
                      value={this.state.nAdress}
                      onChange={(e)=>
                            this.onChangeAdress(e)}
                      />

                <input 
                      type="text" 
                      placeholder="School Date"
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
                  <thead >
                          <tr className="mainList">
                            <th>School Name</th>
                            <th>School Adress</th>
                            <th>School Date</th>
                          </tr>
                  </thead>
                  


                  
      <tbody className="tableData">
                    
                    {this.state.newArr.map((item)=>{
                      return(
                          <Fragment>
                          <tr>       
                                  <th 
                                      key={item.id} 
                                      className="tName"
                                      onDoubleClick={(e)=>{
                                        this.setState({
                                          isOpen: true
                                        
                                        
                                        })
                                      }}
                                      > {item.nameList.title} 
                                  </th> 
               
                                  <th 
                                      key={item.id} 
                                      className="tAdress"
                                      > {item.adressList.title}
                                  </th> 
                                  
                                  <th 
                                      key={item.id} 
                                      className="tDate"
                                      > {item.dateList.title} 
                                  </th> 

                          </tr>  
                              
                          </Fragment>

                                )
                            })
                            
                          }
    </tbody>
                  
                  
                  
         </table>
     






        </div>

      )
    }
  }
  


export default App;