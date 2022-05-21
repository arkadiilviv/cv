import React from "react";
import './bar.css'
import inst from './icons/inst.png'
import twi from './icons/twi.png'
import linkd from './icons/linkd.png'
import git from './icons/git.png'
import me from './icons/me.jpeg'


function Icon(props) {
    return (
        <a href={props.link}>
            <div className="link row">
                <img src={props.img} />
                <p>&nbsp;{props.name}</p>
            </div>
        </a>
    )
}

function BarItem(props) {
    return (
        <div className="barItem">
            <div className="item">
                <Icon link={props.link} name={props.name} img={props.img} />
            </div>
        </div>
    )
}

function Bar() {
    return (
        <div className="bar">
            <BarItem link="/" name="Arkadii Bieliavskyi" img={me} />
            <BarItem link="https://www.instagram.com/iamyourmasterbitch/" name="Instagram" img={inst} />
            <BarItem link="https://twitter.com/wonder_dat_ass" name="Twitter" img={twi} />
            <BarItem link="https://www.linkedin.com/in/arkadii-bieliavskyi-626637155/" name="Linkedin" img={linkd} />
            <BarItem link="https://github.com/arkadiilviv" name="GitHub" img={git} />
        </div>
    )
}

export default Bar