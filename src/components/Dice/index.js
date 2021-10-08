import React, { useState, setState } from 'react'


export default class Dice extends React.Component {
    

    emptyDice = '/img/dice-empty.png'
    diceArr = [ 
    "/img/dice1.png",
    "/img/dice2.png",
    "/img/dice3.png",
    "/img/dice4.png",
    "/img/dice5.png",
    "/img/dice6.png"]
    
    pickRandomDice = () => {

        this.setState({
            currentImage: this.emptyDice
        })
       setTimeout(() => {
           let result = this.diceArr[Math.floor(Math.random() * this.diceArr.length)]
           this.setState({
               currentImage: result
           })
    }, 1000)}



    state = {
        currentImage: "/img/dice1.png"
    }
    render() {
        return (
            <div>
                <button onClick={this.pickRandomDice}>
                  <img src={this.state.currentImage}  className="w-32"/> 
                </button>
            </div>
        )
    }
}
