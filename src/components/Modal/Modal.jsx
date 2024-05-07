import React from "react";
import style from './Modal.module.css'

export default function Modal(props) {
    const { title, message } = props;
    return (
        <>
            <div>{title}</div>
            <div>{message}</div>

        </>
    )
}