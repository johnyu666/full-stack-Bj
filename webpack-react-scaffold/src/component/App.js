import React from 'react'   
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={message:"Hello React"}
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.change()}>test</button>
            </div>
        )
    }
    change(){
        this.setState({message:"Hello: "+Math.random()})
    }
}