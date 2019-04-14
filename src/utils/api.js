export const signup = (firstName, lastName, email) => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8080/TastingOfTheHops/account/signup", {
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
          resolve(response.json());
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload);
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export const signIn = (firstName, lastName, email) => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8080/TastingOfTheHops/account/find", {
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
          resolve(response.json());
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload);
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export const rateBeer = (firstName, lastName, beerName, brewery, rating) => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8080/TastingOfTheHops/tasting/rate", {
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
          resolve();
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload);
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export const findUserBeerRating = (userId, beerId) => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8080/TastingOfTheHops/tasting/rating/find", {
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
          resolve(response.json());
        } else {
          console.log('error getting beer rating')
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export const getTastings = () => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8080/TastingOfTheHops/tasting/tastings", {
      method: "GET",
      mode: "cors"
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json());
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload);
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export const getLineup = () => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8080/TastingOfTheHops/tasting/lineup", {
      method: "GET",
      mode: "cors"
    })
      .then(function(response) {
        if (response.ok) {
          resolve(response.json());
        } else {
          response.json().then(errorPayload => {
            reject(errorPayload);
          });
        }
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export const getAllBeers = () => {
  return new Promise((resolve, reject) => {
    let beers = {};
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
};

export const addBeer = (name, brewery, user) => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8080/TastingOfTheHops/account/beer", {
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
        resolve(response.json());
      } else {
        response.json().then(errorPayload => {
          reject(errorPayload);
        });
      }
    })
    .catch(function(error) {
      reject(error);
    });
  });
}
