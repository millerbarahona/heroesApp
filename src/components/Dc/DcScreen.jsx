import React from 'react'
import { HeroeList } from '../Heroes/HeroeList'

export const DcScreen = () => {
  return (
    <div>
      <h1>DC screen</h1>
      <hr/>
      <HeroeList publisher="DC Comics" />
    </div>
  )
}
