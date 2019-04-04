import Constans from './constans'

 const rootReducer = (state = null, action) => {
    switch (action.type) {
      case Constans.COINS_DATA:
        return Object.assign({}, state, {
          coinsData: action.coinsData
        })
      case Constans.GET_COIN_DETAILS:
      return Object.assign({}, state, {
        selectCoinID: action.selectCoinID,
        isShowDetails: false
      })

      case Constans.HIDE_COIN_DETAILS:
      return Object.assign({}, state, {
        isShowDetails: true
      })
      
      default:
        return state
    }
  }

  export default rootReducer