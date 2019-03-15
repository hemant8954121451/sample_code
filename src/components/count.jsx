import React , {Component}  from 'react'
import  '../css/count.css'
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
        console.log('=======',getAddData)
        this.setState({addData: getAddData})
        //    const data = getAddData.map((obj)=>{
        //     return <li  style={{color:"white",float:"right",marginTop:"10px",padding:"30px 20px 50px 25px",borderRadius: "12px",width:'200px',backgroundColor:"#4b286d"}} >{obj.data}<span style={{display: "block",marginTop: "21px",color: "gray"}}> {obj.time}</span></li>
        // })
    }
    // handleSubmit: function(){
    //     console.log("values" + this.state.text);
    // }
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
                        <button type= "submit" className ="myButton" >Add </button>
                        <ul class="chat" style={{listStyleType:'none'}}>
                        <getData childProps={getAddData} />
                        </ul>
                    </form>
                </div>
        ];
    }
}
export default Count;