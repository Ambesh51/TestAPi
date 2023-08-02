import { async } from 'q';
import React from 'react'

export const api= () =>{
    return fetch("https://reactnative.dev/movies.json")
    .then((response)=>{
        return response.json();
    })
}
function Movies() {
  return (
    <div>Movies</div>
  )
}

export default Movies