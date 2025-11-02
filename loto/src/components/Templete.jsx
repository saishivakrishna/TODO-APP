import { Component } from "react";
import './Templete.css'

export class Temp extends Component{
    constructor(){
        super()
        
        this.state={list:[], text:"",toUpdateData:false,updatedData:"",index:null}
    }
    save=(e)=>{
       this.setState({text:e.target.value})
    }
    button=()=>{
        this.setState({list:[...this.state.list,this.state.text],text:""})
    }
    delete=(index)=>{
        let l=[...this.state.list]
        l.splice(index,1)
        this.setState({list:l,toUpdateData:false})

    }
   edit = (i) => {
        this.setState({
            toUpdateData: true,
            updatedData: this.state.list[i], 
            index: i
        })
    }

    update=()=>{
        let l=[...this.state.list]
        l[this.state.index]=this.state.updatedData;
        this.setState({
            list:l,
            updatedData:"",
            index:null,
            toUpdateData:false,
            text:""
        })


    }
   

    render(){
        return(
            <div className="main">
            <div className="inner">
                <input type="text" onChange={(e)=>this.save(e)} value={this.state.text} required/>
                <button className="submit" onClick={this.button}>Add</button>
                <div>
                 {this.state.list.map((data,index)=>
                <div  className="inner1" key={index}>
                    <h1 className="data">{data}</h1>
                    <button className="edit" onClick={()=>this.edit(index)}>Edit</button>
                    <button className="delete" onClick={()=>this.delete(index)}>Delete</button>

                </div>
                )}
               
                </div>
                </div>
                 <div className="update">
                    {this.state.toUpdateData && <div> <input type="text" onChange={(e)=>this.setState({updatedData:e.target.value})} type="text" value={this.state.updatedData}/>
                    <button onClick={this.update}>update</button> </div>}
                    
                </div>
            </div>
        )
    }
}