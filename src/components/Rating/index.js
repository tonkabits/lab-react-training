import React from "react";

const getRating = (children) => {

    const rounded = Math.round(children)
    return rounded + '_rating.png'
}

    const Rating = (props) => {
        return(
            <>
                <img src={getRating(props.children)} alt="" />
            </>
        )}
export default Rating 