import React, { Component } from 'react'
import styled from 'styled-components';

const Navbar1 = styled.div`
    background-color:#272f41;
    padding:2em;
`;
const Text = styled.div`
    text-align:center;
    color:#fb9fa4;
`;

export default class NavBar extends Component {
    render() {
        return (
            <Navbar1>
                <navbar>
                    <Text>
                        Online boutique
                    </Text>
                </navbar>
            </Navbar1>
                );
            }
        }

