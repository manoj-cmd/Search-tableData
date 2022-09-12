import React from "react";

const User = (props) => {
    const { data } = props
    return (
        <>
            <h2> {data.name} </h2>
            <h2> {data.age} </h2>
        </>
    )
}

export default User;