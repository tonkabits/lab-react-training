import React, { useState, setState } from 'react'


export default class ClickablePicture extends React.Component {

    WithGlasses =  "/img/persons/maxence-glasses.png"
    WithoutGlasses = "/img/persons/maxence.png"

    state = {
        image: true,
    }

    switchImage = () => {
      const  updateImage = this.state.image = !this.state.image
      this.setState({
        image: updateImage
      }, console.log(updateImage)) 
    }
    
    render() {
        return (
            <div
            className="w-32"
             >
            <button onClick={this.switchImage}>
                <img 
                
            

                src={this.state.image ? this.WithoutGlasses : this.WithGlasses}
                
                />
            </button>
            </div>
        )
    }
}
