import { heroes } from "../data/heroe";

export const getHeroesByPublisher = ( publisher ) => {
  const validPublishers = [' DC Comics', 'Marval Comics'];

  if( validPublishers.includes(publisher)){
    throw new Error(` Publisher ${publisher} no es valido`);
  }

  return heroes.filter( hero => hero.publisher === publisher);
  
}