import React, { useState, setState } from 'react'

export default class LikeButton extends React.Component {

    addLike = () => {
        console.log('we click it')
       let count =  this.state.count + 1
        let color = ['purple', 'green', 'yellow', 'red', 'purple', 'green', 'yellow', 'red',  ]
        color = color[count]
        let currentClasses = 'px-4 rounded mx-2 bg-'+color+'-300 text-'+color+'-800'
        this.setState({
            count: count,
            currentClasses: currentClasses
        })
    }


    state = {
        count: 0,
        currentClasses: 'px-4 rounded mx-2 bg-purple-300 text-purple-800'
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.addLike}
                    className={this.state.currentClasses}
                    >
                       {this.state.count} Likes
                </button>
            </div>
        )
    }
}
