import React from 'react';
import CarrotCake from '../assets/Images/Carrot_Cake.png';
import DulceDeLecheCake from '../assets/Images/Dulce_de_leche_Cake.png';
import BreadTable from '../assets/Images/Bread_table.png';
import './News.css';

const News = () => {
    return(
        <div className='cards-news'>
            <div className='card-news'>
                <div className='card-content'>
                    <img src={CarrotCake}  class='img'/>
                    <h4>CARROT CAKE</h4>
                </div>
            </div>
            <div className='card-news'>
                <div className='card-content'>
                    <img src={DulceDeLecheCake}  class='img'/>
                    <h4>DULCE DE LECHE CAKE</h4>
                </div>
            </div>
            <div className='card-news'>
                <div className='card-content'>
                    <img src={BreadTable}  class='img'/>
                    <h4>WHOLEMEAL SOURDOUHG</h4>
                </div>
            </div>

        </div>
    )
}

export { News }