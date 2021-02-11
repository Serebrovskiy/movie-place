const BASE_URL_API = 'http://localhost:3001'

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

export const getFilms = () => {
  return fetch(`${BASE_URL_API}/films`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      // Authorization: `Bearer ${token}`
    },
  })
    .then(getResponse)
};

export const createFilm = (
  name,
  date,
  link,
  genres,
  country,
  director,
  actors,
  checked,
  //id
  token
) => {
  return fetch(`${BASE_URL_API}/films`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name,
      date,
      link,
      genres,
      country,
      director,
      actors,
      checked,
      //id
    })
  })
    .then(getResponse)
};

export const deleteFilm = (filmId, token) => {
  // console.log(filmId)
  return fetch(`${BASE_URL_API}/films/${filmId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(getResponse)
};

export const updateFilm = (film, token) => {
  // console.log(film.name)
  return fetch(`${BASE_URL_API}/films/${film.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(film)
  })
    .then(getResponse)
};

export const updateUser = (ratingFilm, userId, token) => {
  console.log(ratingFilm)
  return fetch(`${BASE_URL_API}/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(ratingFilm)
  })
    .then(getResponse)
};

export const getUsers = (token) => {
  return fetch(`${BASE_URL_API}/users`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
    .then(getResponse)
};

export const userAddFollowing = (followings, userId, token) => {  //followings
  return fetch(`${BASE_URL_API}/users/followings/${userId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(followings) //followings
  })
    .then(getResponse)
};

export const setAvatar = (avatar, userId, token) => {
  console.log(avatar)
  return fetch(`${BASE_URL_API}/users/avatar/${userId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ avatar })
  })
    .then(getResponse)
}