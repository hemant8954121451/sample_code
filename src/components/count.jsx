import React , {Component}  from 'react'
import  '../css/count.css'
import {GetData} from './child'
class Count extends Component{
    constructor(props){
        super(props)
        this.state={
            addData:[],
            removeData:[],
            text:'',
            isLoader:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({ text: e.target.value })
    }
    handleSubmit(e){
        e.preventDefault();
        const getAddData = this.state.text;
       const addData = [...this.state.addData]

        addData.push(getAddData)
        console.log("========================")
        console.log("state add data",this.state.addData)
        console.log("add data current push",addData)
        console.log("------------------------------")
        this.setState({addData: addData})
       
    //    this.setState({addData: addData},()=>{
    //        console.log(this.state.addData)
    //    })

    }
   
    render(){
        return[
            <div>To do Task</div> , <hr/>,
                <div align="center" className="main_div">
                    <form onSubmit={this.handleSubmit}>
                        <input  
                            onChange={this.handleChange} 
                            type="text" 
                            name="title"  
                            placeholder = "Enter text value" 
                            value={this.state.text} />
                            <GetData addData={this.state.addData} />
                        
                        <button type= "submit" className ="myButton" >Add </button>
                        
                    </form>
                </div>
                
        ];
    }
}
export default Count;