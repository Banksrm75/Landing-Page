import React from 'react';
import Card from './Card.jsx'

const CardRow = () => {

    return (
        <> /// fix so that when squished, they go back to one on top of each other
            <div className="d-flex">
                <Card />
                <Card />
                <Card />
            </div>
        </>

    );
}

export default CardRow;