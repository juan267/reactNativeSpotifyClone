export function get(url) {
  return fetch(url)
    .then(data => data.json())
}

export function searchFor(query) {
  return get(`https://api.spotify.com/v1/search?q=${query}&type=artist`)
   .then((res) => {
     const artists = res.artists ? res.artists.items : []
     return artists
   })
}

