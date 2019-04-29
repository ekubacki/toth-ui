const BASE_URL = "http://10.0.75.1:8080/TastingOfTheHops"
export const signup = (firstName, lastName, email) => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + '/account/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email
      })
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json())
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload)
          })
        }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const signIn = (firstName, lastName, email) => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/account/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email
      })
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json())
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload)
          })
        }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const rateBeer = (firstName, lastName, beerName, brewery, rating) => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/tasting/rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        firstName,
        lastName,
        name: beerName,
        brewery,
        rating
      })
    })
      .then(function(response) {
        if (response.ok) {
          resolve()
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload)
          })
        }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const findUserBeerRating = (userId, beerId) => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/tasting/rating/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        userId,
        beerId
      })
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json())
        }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const getTastings = () => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/tasting/tastings", {
      method: "GET",
      mode: "cors"
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json())
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload)
          })
        }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const getLineup = () => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/tasting/lineup", {
      method: "GET",
      mode: "cors"
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json())
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload)
          })
        }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const deleteTasting = (beerId) => {
  
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + `/tasting/${beerId}`, {
      method: "DELETE",
      mode: "cors"
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json())
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload)
          })
        }
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const getAllBeers = () => {
  return new Promise((resolve, reject) => {
    let beers = {}
    getTastings().then(response => {
      beers.tastings = response.tastingsResponse
      return Promise.resolve()
    }).then(() => {
      getLineup().then(response => {
        beers.lineup = response.tastingsResponse
        resolve(beers)
      })
    })
  })
}

export const addBeer = (name, brewery, user) => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/account/beer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        beers: [
          {
            name,
            brewery
          }
        ]
      })
    })
    .then(function(response) {
      if (response.ok) {
        resolve(response.json())
      } else {
        reject(response)
      }
    })
    .catch(function(error) {
      reject(error)
    })
  })
}

export const tasteBeer = (name, brewery) => {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/tasting/tasted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({ name, brewery }) 
    })
    .then(function(response) {
      if (response.ok) {
        resolve(response.json())
      } else {
        reject(response)
      }
    })
    .catch(function(error) {
      reject(error)
    })
  })
}
