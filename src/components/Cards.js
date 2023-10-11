//contenedor de las tarjet
import React from 'react'
import Card from './Card'
import imagen1 from '../assets/cafe.jpeg'
import imagen2 from '../assets/comida.jpeg'
import imagen3 from '../assets/images.jpeg'

const cards=[
{id:1,
title: 'Cafeteria',
image: imagen1,
instructor:"Daniel Valencia Cruz"
},
{id:2,
    title: 'Restaurante',
    image: imagen2,
    instructor:"Daniel Valencia Cruz"},
{id:3,
    title: 'viajes',
    image: imagen3,
    instructor:"Daniel Valencia Cruz"}

]


export default function Cards() {

    console.log()

  return (

    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map( c => ( 
                
                <div className='col-md-4' key={cards.id} >
                     <Card
                        key= {c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        instructor={c.instructor}

                     />
                </div>))
             

            }


        </div>




    </div>
  );
}
