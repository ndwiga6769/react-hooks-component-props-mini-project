import React from "react";

function About (props){
    const myImage = <img src={props.image} alt = "blog logo"/>
return(
    <aside>
        {myImage}
        <p>{props.about}</p>
    </aside>
)
}

export default About;