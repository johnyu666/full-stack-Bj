import React from 'react'
import ReactDom from 'react-dom'
import App from './component/App'
class Index extends React.Component{
    render(){
        return <App/>
    }
}
ReactDom.render(<Index/>,document.getElementById('app'))
