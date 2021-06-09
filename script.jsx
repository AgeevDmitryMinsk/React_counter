class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0 }
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    reset = () => {
        this.setState({ counter: 0 });
    };

    render() {
        // Используем JavaScript-шаблон для склейки значения атрибута
        const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

//Немного пользы от выключателя, у которого состояние жёстко задаётся извне. Замените в этом компоненте
// пропс this.props.isActive на внутреннее состояние this.state.isActive и изменяйте его значение в обработчике клика. И будет вам счастье.

        return (
            <>
            <div> Счетчик: {this.state.counter}</div>

                <button onClick={this.increment}> +1 </button>
                <button onClick={this.decrement}> -1 </button>
                <button onClick={this.reset}> reset </button>
            </>
        );
    }
}

ReactDOM.render((
    <>
        <Counter />

    </>
), document.querySelector('#root'));