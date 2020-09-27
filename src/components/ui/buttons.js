import styled from "styled-components";
import React from "react";

const Btn = styled(({inner, ...props}) => {
    return <div {...props}>
        <span>{inner}</span>
    </div>
})`
  padding: 0 15px;
  font-size: ${({size = 'medium'}) => {
    switch (size) {
        case 'small':
            return 12
        default:
            return 15
    }
}}px;
  line-height: ${({size = 'medium'}) => {
    switch (size) {
        case 'small':
            return 20
        default:
            return 30
    }
}}px;
`

const BtnGreyWhiteInnerfade = styled(({...props}) => {
    return <Btn {...props}/>
})`
    border-radius: 2px;
    border: none;
    padding: 1px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    background: #b3b3b3;
    background: linear-gradient(to bottom, #b3b3b3 5%, #484848 95%);
  
    >span {
        border-radius: 2px;
        display: block;
        background: #7e7e7e;
        background: linear-gradient(to bottom, #7e7e7e 5%, #484848 95%);
    }
    
    :not(.btn_disabled):not(.btn_active):hover:not(.active):hover {
        text-decoration: none;
        color: #fff;
        background: #c2c2c2;
        background: linear-gradient(to bottom, #c2c2c2 5%, #565656 95%);
    }
  
    :not(.btn_disabled):not(.btn_active):hover:not(.active):hover>span {
        background: #969696;
        background: linear-gradient(to bottom, #969696 5%, #565656 95%);
    }
`

export {Btn, BtnGreyWhiteInnerfade}