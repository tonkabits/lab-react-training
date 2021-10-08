import React from "react";
    
    const style = {
      backgroundColor: ''
    } 
        




    const BoxColor = (props) => {
        const { r, g, b } = props
        const bc = 'rgb(' + r + ',' + g + ',' + b + ')'
        const style = {
            backgroundColor: bc
        }
    const hex = '#' + r.toString(16) + g.toString(16) + b.toString(16) 
        return (
            <>
                <div className=" mb-2 rounded w-10/12 m-auto h-24 flex items-center justify-center text-xl text-white" style={style}>
                    {bc} <br />
                    {hex}
            </div>
            </>
        )
    }


export default BoxColor