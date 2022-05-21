import React from "react";
import './main.css'

function Terminal() {
    return (
        <div className="terminal">
            <div className="fakeMenu">
                <div className="fakeButtons fakeClose"></div>
                <div className="fakeButtons fakeMinimize"></div>
                <div className="fakeButtons fakeZoom"></div>
            </div>
            <div className="fakeScreen">
                <p className="type">&gt; init</p>
                <p className="type delay1">
                    &gt; Yo, it's me <span className="green">Arkadii Bieliavskyi</span>
                </p>
                <p className="type delay2">
                    &gt; And I'm <span className="orange">Fullstack Web Developer</span> and here my stack:
                </p>
                <p className="type delay3">- C#.NET Framework</p>
                <p className="type delay3">- SQL</p>
                <p className="type delay3">- HTML, JS, CSS, REACT</p>
                <p className="type delay3">- GoLang, Docker</p>
                <p className="type delay4">&gt; And i'm always looking for new <span className="red">opportunities</span></p>
                <p className="type delay5">
                    <a className="blue" href="mailto:lviv.home31@gmail.com">Mail me!</a>
                    &nbsp;or contact in Telegram&nbsp;
                    <a className="pink" href="https://t.me/invalidnametaken">Telegram!</a>
                </p>
            </div>
        </div>
    )
}

function Main() {
    return (
        <div className="main">
            <Terminal />
            <div className="footer">
                <div>
                    Created with:
                    <a target="_blank" href="https://icons8.com">React</a>,&nbsp;
                    <a target="_blank" href="https://icons8.com">icons by Icons8</a>
                </div>

            </div>
        </div>
    )
}

export default Main;