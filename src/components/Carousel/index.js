import React, { useState, setState } from 'react'

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

    }

    picLeft = () =>{ 
        if(this.state.currentImageIndex > 0){
            let next = this.state.currentImageIndex - 1
            this.setState({
                currentImageIndex: next
            })
        }else{
            console.log('not more pictures to the left')
        }

        console.log('to left')
    }

    picRight = () => { 
        if (this.state.currentImageIndex < this.props.imgs.length -1){
            let next = this.state.currentImageIndex + 1
            this.setState({
                currentImageIndex: next
            })
        }else{
            console.log('not more pictures to the left')
        }

        console.log('to right')
    }

    state = {
        currentImageIndex: 0
    }



    render() {
        return (
            <div>
                this is a Carousel<br />
                <img src={this.props.imgs[this.state.currentImageIndex]} className="w-60 rounded-lg mb-4"/>
                <button className="w-24 py-1 rounded mx-2 bg-green-200" onClick={this.picLeft}>left</button>
                <button className="w-24 py-1 rounded mx-2 bg-green-200" onClick={this.picRight}>right</button>
            </div>
        )
    }
}
