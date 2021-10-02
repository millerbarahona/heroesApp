import React from 'react'
import { HeroeList } from '../Heroes/HeroeList'

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel screen</h1>
      <hr />
      <HeroeList publisher="Marvel Comics" />
    </div>
  )
}
