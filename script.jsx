class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
    };

    decrement = () => {
        this.setState({counter: this.state.counter - 1});
    };

    reset = () => {
        this.setState({counter: 0});
    };

    render() {
        return (
            <>
                <div> Счетчик: {this.state.counter}</div>

                <button style={{ fontSize: '55px' }} onClick={this.increment}> +1</button>
                <button style={{ fontSize: '55px' }} onClick={this.decrement}> -1</button>
                <button style={{ fontSize: '55px' }} onClick={this.reset}> reset</button>
            </>
        );

    }
}

ReactDOM.render((
    <>
        <Counter />

    </>
), document.querySelector('#root'));