
import React from 'react';

const Card = () => {

    return (
        <> 
            <div className="card">
                <img src="https://picsum.photos/100" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus ipsa itaque numquam nobis facere? Obcaecati officia est assumenda asperiores minus illo quis quo blanditiis sunt ipsam? Consequuntur, officiis quia!</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        
        </>

    );
}

export default Card;
