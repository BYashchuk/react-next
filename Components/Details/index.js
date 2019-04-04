import React from 'react'

const Item = ({ dataItem }) => {
    return (
        <div>
            {dataItem.CoinInfo.Name}
            <img src={`https://www.cryptocompare.com${dataItem.CoinInfo.ImageUrl}`} />
        </div>
    )
}


export default Item