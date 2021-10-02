import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {

  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroesById(heroeId)[0], [heroeId]);

  if (!heroe) {
    return <Redirect to="/dc" />
  }

  const { id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push(`/${publisher}`)
    } else {
      history.goBack();
    }

  }

  return (
    <div className="row mt-5">

      <div className="col-md-4">
        <img src={`../assets/heroes/${heroeId}.jpg`} className="animate__animated animate__fadeInLeft img-thumbnail" />
      </div>
      <div className="col-md-8">
        <h1>{superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> Alter ego: </b> {alter_ego} </li>
          <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
          <li className="list-group-item"> <b> First Appearence: </b> {first_appearance} </li>
        </ul>

        <h5> Characters </h5>
        <p> {characters} </p>

        <button
          className="btn btn-outline-primary"
          onClick={() => handleReturn()}
        >
          Return
        </button>

      </div>
    </div>
  )
}
