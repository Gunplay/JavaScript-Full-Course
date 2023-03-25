import { useHttp } from '../hooks/http.hook'

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp()

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
  const _apiKey = 'apikey=889c8db3d6e0ff33fda7c461355be34e'
  const _baseOffset = 210

  // getResource = async (url) => {
  //   let res = await fetch(url)

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  //   }

  //   return await res.json()
  // }

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=10&offset=${offset}&${_apiKey}`
    )
    return {
      data: res.data.results.map(_transformCharacter),
      offset: res.data.offset,
    } //char
    //res.data.results.map(this._transformCharacter)
  }

  const getCharactersById = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
    return _transformCharacter(res.data.results[0])
  }

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : 'There is no description for this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items.slice(0, 9),
    }
  }

  return { loading, error, clearError, getCharactersById, getAllCharacters }
}

export default useMarvelService
