import React, { Component } from 'react'
import styled from 'styled-components';

const Title = styled.div`
    font-weight:bold;
    color:#fb9fa4;
    font-size:5em;
    line-height:80%;
    padding-left:0.5em;
    padding-top:1em;
    padding-botton:1em;
`;

const Image = styled.div`
    padding-top:1cm;
`;

export default class Product extends Component {
    render() {
        return (
            <Title>
                <div>PRODUCT</div>
                <div>DESIGN</div>
                <Image><img src='/static/images/pinkgrey.jpg' className='img-fluid' width='96%' alt='pink and grey'/></Image>
            </Title>
                );
            }
        }