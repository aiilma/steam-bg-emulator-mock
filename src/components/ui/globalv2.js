import React from "react";
import styled from "styled-components";

const Link = styled.a`
    color: #ebebeb;
    text-decoration: none;
    cursor: pointer;
`

const Ellipsis = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export {Ellipsis, Link}