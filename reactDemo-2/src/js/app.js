// document.getElementById("app").innerHTML = "hello react"

// 项目入口文件
import React,{Component} from "react";
import ReactDOM from "react-dom";

import Demo from "./demo.js";

import ASD from "./asd.js";

import ZXC from "./zx.js";
// 引入css
// import APP from "./app.css";

ReactDOM.render(
    <div>

        <Demo></Demo>
        <ASD></ASD>
        <ZXC></ZXC>


    </div>,
    document.getElementById("app")
)