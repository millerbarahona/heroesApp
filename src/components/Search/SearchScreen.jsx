import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { heroes } from '../../data/heroe'
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../Heroes/HeroeCard';
import queryString from 'query-string';
import './style.css';
import { getHeroesByName } from '../../selectors/getHeroesbyName';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search); // se utiliza la libreria para tomar el q de los parametros


  const [formValues, handleInputChange, reset] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${searchText}`);


  }
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              value={searchText}
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              onChange={handleInputChange}
              autoComplete="off"
            />

            <button type="submit" className="btn btn-outline-primary">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          {
            heroesFiltered != 0
              ?
              <>
                <h4>Results</h4>
                <hr />
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                  className=""
                >
                  <Masonry >
                    {
                      heroesFiltered.map(hero => (
                        <HeroeCard key={hero.id} {...hero} />
                      ))
                    }
                  </Masonry>
                </ResponsiveMasonry>
              </>
              :
              <div className="alert alert-info">
                No se ha encontrado ningun heroe
              </div>
          }
        </div>
      </div>
    </div>
  )
}
