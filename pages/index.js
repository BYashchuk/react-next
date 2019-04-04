import React from 'react'
import { connect } from 'react-redux'
import {
  serverCoinsData,
  getCoinDetails,
  isHideCoinDetails
} from '../redux/actions'
import Main from '../Components/Main'


class Index extends React.Component {


  componentDidMount() {
    this.getCoinInfo()
  }

  getCoinInfo = () => {
    fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=8b906026037dcdf0689bb21a53d1a7209c162177e28871867211c70fd3d385e1`)
      .then(response => response.json())
      .then(data => this.props.onServerCoinsData(data.Data))
  }

  render() {

    const coinsDataProps = {
      coinsData: this.props.coinsData,
      getCoinDetails: this.props.getCoinDetails,
      isShowDetails: this.props.isShowDetails,
      isHideCoinDetails: this.props.isHideCoinDetails,
      selectCoinID: this.props.selectCoinID
    }

    return (
      <div>

        <style jsx>{`
          h1 {
text-align: center;
          }
        `}
        </style>
        <h1>Топлист по рыночной капитализации Полные данные</h1>
        <Main {...coinsDataProps} />
      </div>
    )

  }
}


const mapStateToProps = state => ({
  coinsData: state.rootState.coinsData,
  selectCoinID: state.rootState.selectCoinID,
  isShowDetails: state.rootState.isShowDetails
})

const mapDispatchToProps = dispatch => ({
  onServerCoinsData: allCoins => dispatch(serverCoinsData(allCoins)),
  getCoinDetails: selectCoinID => dispatch(getCoinDetails(selectCoinID)),
  isHideCoinDetails: () => dispatch(isHideCoinDetails()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Index)