import React, { Component } from 'react'
import Cell from './Cell.js'

export default class NumbersTable extends React.Component {
    constructor(props) {
        super(props);

    }
    
   numberOfCells = [...Array(this.props.limit).keys()]
    
   makeElements = () => {
     this.numberOfCells.forEach((item) => {
        return <Cell number={item} />
     })
   }


    render() {
        return (
            <div className="flex w-full bg-yellow-500 flex-wrap">
                {this.numberOfCells.map((value, index) => {
                    value += 1 
                    if(value % 2 === 0){
                        return <Cell  number={value}  even="true" />
                    }else{
                        return <Cell number={value}/>
                    }
                })}
            </div>
        )
    }
}
