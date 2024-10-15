
import React from 'react';

const Footer = () => {

    return(
        <footer className='bg-dark text-center text-white mt-4 py-3'>
            <p>Copyright &copy; Your Website {new Date().getFullYear()}</p>
        </footer>
    );

}

export default Footer