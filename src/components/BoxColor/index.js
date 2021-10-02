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
        return (
            <>
                <div className=" mb-2 rounded w-10/12 m-auto h-24 flex items-center justify-center text-xl text-white" style={style}>
                    {bc}
            </div>
            </>
        )
    }


export default BoxColor