const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      }
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
        // ЭТО МОЖНО СДЕЛАТЬ И ПО ДРУГОМУ
        // Я специально показываю вариант с действиями тут, но более правильный вариант
        // будет показан в следующем уроке
        // filteredHeroes:
        //   state.activeFilter === 'all'
        //     ? action.payload
        //     : action.payload.filter(
        //         (item) => item.element === state.activeFilter
        //       ),
      }
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      }
    // Самая сложная часть - это показывать новые элементы по фильтрам
    // при создании или удалении
    case 'HERO_CREATED':
      // Формируем новый массив
      // let newCreatedHeroList = [...state.heroes, action.payload]
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        // Фильтруем новые данные по фильтру, который сейчас применяется
        // filteredHeroes:
        //   state.activeFilter === 'all'
        //     ? newCreatedHeroList
        //     : newCreatedHeroList.filter(
        //         (item) => item.element === state.activeFilter
        //       ),
      }
    case 'HERO_DELETED':
      // Формируем новый массив
      // const newHeroList = state.heroes.filter(
      //   (item) => item.id !== action.payload
      // )
      return {
        ...state,
        heroes: state.heroes.filter((item) => item.id !== action.payload),
        // Фильтруем новые данные по фильтру, который сейчас применяется
        // filteredHeroes:
        //   state.activeFilter === 'all'
        //     ? newHeroList
        //     : newHeroList.filter((item) => item.element === state.activeFilter),
      }
    default:
      return state
  }
}

export default heroes
