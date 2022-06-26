let getRockets = () => {
   return  fetch('https://api.spacexdata.com/v3/launches')
      .then(value => value.json())
}

export {getRockets}