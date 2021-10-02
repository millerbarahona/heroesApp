import React from 'react'
import { Link } from 'react-router-dom';
import './heroe.css';

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card md-3 box" >

      <div className="row ">

        <img src={`./assets/heroes/${id}.jpg`} className="card-img imagen" alt={superhero} />

        <div className="card-body">
          <div className="card-title">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text" >{alter_ego}</p>
            {
              (alter_ego !== characters)
              && <p className="" > {characters}</p>
            }
            <p className="card-text">
              <small className="text-muted">{ first_appearance }</small>
            </p>
            <Link to={`./heroe/${id}`} >
              Mas...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
