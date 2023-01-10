import React from 'react';

const Product = (props) => {


    const {title, description, price, picture_URL} = props.data;

    return (
            <div className="card" style={{width: "25rem"}}>

                <img src={picture_URL} alt={title} className="card-img-top" />

                <div className="card-body">
                    <h4 className="card-title">
                       {title}
                    </h4>
                    <p className="card-text">
                        {description}
                    </p>
                    <h3>
                        Price: {price} SEK
                    </h3>
                </div>

                <div className="card-footer d-grid">
                    <button className="btn btn-primary">
                        <svg style={{marginRight: ".5rem"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        Add To Cart!
                    </button>
                </div>

            </div>
    );
};

export default Product;