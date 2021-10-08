import React from "react";

const joinName = (firstName, lastName) => {
    return firstName + ' ' + lastName
}

const Card = (props) => {
    return (
        <>
            <div className="w-1/6 p-2">
                <div className="rounded-lg bg-gray-100 relative">
                    <div className="rounded ">
                        <img src={props.img} alt="any" className="w-full rounded-lg" />
                    </div>
                   
                    <div className="absolute top-0 right-0">
                        <p className={props.isStudent ? "ml-2 rounded px-2 py-1 bg-red-200 text-red-800 m-3" : "ml-2 rounded px-2 py-1 bg-green-200 text-green-800 m-3"}>
                            <span className="text-xs">
                                {props.isStudent ? 'student' : 'teacher'}
                            </span>
                        </p>
                    </div>
                    <div className="px-2 py-4">
                        <div className="flex items-center">
                            <label className="text-xs uppercase text-gray-400 font-bold">
                                First Name
                            </label>
                            <p className=" ml-2">
                                {props.firstName}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <label className="text-xs uppercase text-gray-400 font-bold">
                                Last Name
                            </label>
                            <p className=" ml-2">
                                {props.lastName}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <label className="text-xs uppercase text-gray-400 font-bold">
                                Country
                            </label>
                            <p className=" ml-2">
                                {props.country}
                            </p>
                        </div>
                
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card