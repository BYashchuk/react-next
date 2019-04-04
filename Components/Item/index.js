import React from 'react'

const Item = (props) => {

    return (
        
        <tr onClick={ ()=>{ props.getCoinDetails(props.dataItem.CoinInfo.Id)}}>

       
           <td className='coinNumber'>{props.coinNumber}</td> 
           <td> <img src={`https://www.cryptocompare.com${props.dataItem.CoinInfo.ImageUrl}`} /></td> 
           
           <td> {props.dataItem.CoinInfo.Name}</td> 
           <td> {props.dataItem.CoinInfo.FullName}</td> 

           <td> {props.dataItem.DISPLAY.USD.PRICE}</td> 
           <td> {props.dataItem.DISPLAY.USD.VOLUME24HOURTO}</td> 
           <td> {props.dataItem.DISPLAY.USD.TOTALVOLUME24HTO}</td> 
           <td> {props.dataItem.DISPLAY.USD.CHANGEPCT24HOUR}</td> 

           <style jsx>{`
        img{
          width: 45px;
        }
        tr {
            text-align: center;
            
        }
        `}</style>

           

        </tr>
    )
}


export default Item