document.getElementById('app').innerHTML = "hello react"


// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello'

let obj = {}
obj.x="abc"
obj.y="123"

import Life from './Life'
import ClickEvent from './ClickEvent'
import FindDom from './FindDom.js'

ReactDOM.render(
    <div>




        <FindDom></FindDom>


    </div>,
    document.getElementById('app')
)

