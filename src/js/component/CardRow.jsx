import React from 'react';
import Card from './Card.jsx'

const CardRow = () => {

    return (
        <> 
            <div class="row row-cols-1 row-cols-md-4 ">
                <div class="col">
                    <Card />
                </div>
                <div class="col">
                    <Card />
                </div>
                <div class="col">
                    <Card />
                </div>
                <div class="col">
                    <Card />
                </div>
                
                
            </div>
        </>

    );
}

export default CardRow;