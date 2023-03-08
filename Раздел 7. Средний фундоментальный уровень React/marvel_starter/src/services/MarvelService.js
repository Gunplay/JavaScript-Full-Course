class MarvelService {
  // lodash _ значение менять запрещено
  _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  _apiKey = 'apikey=889c8db3d6e0ff33fda7c461355be34e'

  getSourse = async (url) => {
    let res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`)
    }
    return res.json()
  }

  getAllCharacters = async () => {
    const res = await this.getSourse(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    )

    return res.data.results.map(this._transfromCharacter)
  }

  getCharactersById = async (id) => {
    // get res
    const res = await this.getSourse(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    )
    return this._transfromCharacter(res.data.results[0]) // char
  }
  // lodash !!!!
  _transfromCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : 'There is no description for this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension, // picture preview
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    }
  }
}

export default MarvelService
