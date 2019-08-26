import React, { Component } from 'react'
import styled from 'styled-components';

const NewLine = styled.div`
    color:#fb9fa4;
    padding-left:1.5em;
    
    font-size:2em;
    line-height:90%;
`;

const Details = styled.div`
    color:#fb9fa4;
    padding-top:2em;
`;

export default class Detail extends Component {
    render() {
        return (
            
            <Details>
                <div className='row'>
                <div className='col'>
                    <NewLine>
                    <div>OFFICIAL</div>
                    <div>FINALIST</div>
                    <div>AT ETSY</div>
                    <div>DESIGN AWARDS</div>
                    </NewLine>
                </div>
                
                <div className='col'>
                    <p>Collage is a contemporary product design boutique that 
                    creates original and unique objects, experimenting with 
                    different materials, shapes, textures and colors. 
                    We create a wide variety of hand-crafted objects, 
                    from decorative and utility accessories to jewelry, 
                    while constantly evolving to offer unique products 
                    for a design-savvy clientele.</p>
                </div>
                <div className='col'>
                    <p>All prices are in Canadian (CAD) currency.
                        To accommodate our clients outside of Canada,
                        we offer different shipping costs and methods,
                        at the best available price, but you need to get 
                        in touch first. Please contact us for international 
                        shipping costs, personalized orders or for a pick up, 
                        we'll be happy to create a specific listing for you.</p>
                </div>
                
                </div>
            </Details>
            
                );
            }
        }