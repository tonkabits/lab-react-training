import React from "react";

    const pickRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }


    const Random = (props) => {
        return(
            <>
                <div className="bg-green-100 flex justify-center items-center h-10 my-2 w-10/12 m-auto rounded border-2 border-green-300">
                <p >
                Random value between {props.min} and {props.max} = {pickRandom(props.min, props.max)}

                </p>
            </div>
            </>
        )} 

export default Random