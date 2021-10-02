import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}
      className="animate__animated animate__fadeInDown"
    >
      <Masonry className="card-columns" gutter="10px">
        {
          heroes.map(heroe => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  )
}
