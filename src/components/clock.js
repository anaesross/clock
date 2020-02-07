import React from 'react';
import ReactDOM from 'react-dom';


export default class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            timer: new Date().toLocaleTimeString()
        }
    }    
    componentDidMount(){//função assíncrona,
        let interval_id = setInterval(()=> { //aqui estou armazenando o valor do id da hora em interval_id
        this.setState({
                timer : new Date().toLocaleTimeString() //setState deixa alterar o estado
            })
        }, 1000) //a cada um segundo ele atualiza a função tolocaledatestring
        this.setState({
            ...this.state,
            interval_id:interval_id
        })
    }
    componentWillMount(){ // JOGAR NO CONSOLE : setInterval(new Date().toLocaleTimeString() }), 1000) PARA DESCOBRIR O ID
        clearInterval();
    }
    render() {
        return (
            <div>
                {this.state.timer}
            </div>
        )
        }
    }
