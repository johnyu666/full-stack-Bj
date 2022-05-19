class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: "Hello React!" }
        // this.change=this.change.bind(this)
    }

    render() {
        let div = <div><h1>{this.state.message}</h1>
            <button onClick={this.change}>change me</button>
        </div>
        return div;
    }
    change = () => {
        this.setState({ message: "Hello: " + Math.random() })
    }
}
ReactDOM.render(<App />, document.querySelector("#app"))