import React from 'react'

const Cell = (props) =>  {
    return (
        <div className={props.even ? 'bg-green-500  w-1/5 h-32 flex items-center' : 'bg-red-500 w-1/5 h-32 flex items-center'}>
            <div className="m-auto flex items-center justify-center h-12 w-12 rounded-full bg-white">
                 {props.number}
            </div>
        </div>
    )
}
export default Cell