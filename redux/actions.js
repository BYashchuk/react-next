import Constans from './constans'

export const serverCoinsData = coinsData => dispatch => {
  return dispatch({ type: Constans.COINS_DATA, coinsData: coinsData })
}



export const getCoinDetails = selectCoinID => dispatch => {
  return dispatch({ type: Constans.GET_COIN_DETAILS, selectCoinID: selectCoinID })
}

export const isHideCoinDetails = () => dispatch => {
  return dispatch({ type: Constans.HIDE_COIN_DETAILS })
}