import React from 'react'
import Item from '../Item'
import Details from '../Details'

const Main = ({
  coinsData,
  getCoinDetails,
  isShowDetails,
  isHideCoinDetails,
  selectCoinID
}) => {

  let coinNumber = 1

  return (
    <React.Fragment>

      <style jsx>{`
          table {
            width:100%;
          }

          
        `}
      </style>


      {isShowDetails ?
        <div>
          <table border='1'>
            <tbody>
              <tr>
                <th>&#8470;</th>
                <th>ICON</th>
                <th>Name</th>
                <th>FullName</th>
                <th>Price	</th>
                <th>VOLUME24HOURTO</th>
                <th>TOTALVOLUME24HTO</th>
                <th>CHANGEPCT24HOUR</th>
              </tr>
              {coinsData.length !== 0 ?
                coinsData.map((dataItem, key) => {
                  const coinProps = {
                    coinNumber: coinNumber++,
                    getCoinDetails,
                    dataItem
                  }
                  return (
                    <React.Fragment key={key}>
                      <Item {...coinProps} />
                    </React.Fragment>
                  )
                })
                : null
              }
            </tbody>
          </table>
        </div>
        :
        <div>
          <button onClick={() => isHideCoinDetails()}>ok</button>
          {coinsData.length !== 0 ?
            coinsData
              .filter(dataItem => {
                if (selectCoinID !== '') {
                  return dataItem.CoinInfo.Id === selectCoinID
                }

                return dataItem
              })
              .map((dataItem, key) => {
                return (
                  <Details key={key} dataItem={dataItem} />
                )
              })
            : null
          }
        </div>
      }
    </React.Fragment>
  )
}

export default Main