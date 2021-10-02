import { heroes } from "../data/heroe";

export const getHeroesById = ( id ) => {
  const validPublishers = [' DC Comics', 'Marval Comics'];

  return heroes.filter( hero => hero.id === id);
  
}