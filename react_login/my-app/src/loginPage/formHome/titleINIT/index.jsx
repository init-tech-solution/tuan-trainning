import React from 'react'
import "./style.css"
import logo from "../../../assets/logoINIT.jpeg"

export default function Title() {
    return (
        <div>
            <h1 className="title">WELCOME TO INIT</h1>
            <img src={logo} alt=""/>
        </div>
    )
}
