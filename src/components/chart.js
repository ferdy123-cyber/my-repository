import {connect} from 'react-redux'
import chek from '../img/checkout.png'
import search from '../img/search.png'
import Product from './product'
import logo from '../img/icon.png'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'

const Chart = ({ rmvItem, Chart, addQty, minQty, filtItem}) => {
    const datas = JSON.parse(localStorage.getItem('datas'))
    const [status, setstatus] = useState("PENDING")
    const totalChost = Chart.map( val => val.Chart.Price ).reduce( (a,b) => (a+b), 0)
    const totalQty = Chart.map( val =>  val.itemQty ).reduce( (a,b) => (a+b), 0 );
    const totalPaid = Chart.map( val => val.Chart.Price *  val.itemQty ).reduce( (a,b) => (a+b), 0)
    const Chekout = () => {
        alert('payment succes')
        setstatus("PAID")
    }
    if (Chart.length === 0) {
        return(
            <div className="empty-chart">
                <h2>Your cart is empty</h2>
                <Link to= '/product'>
                    <button>Shop</button>
                </Link>
            </div>
        )
    }
    return (
        <div className="all">
            <div className="list">
                <div className="top">
                    <div class="shopName edit">
                        <Link to='/product'>
                            <button>Back</button>
                        </Link>
		            </div>
                    <div>
						<div className="qty"><p className="p2">{totalQty}</p></div>
					</div>
		            <div className="top-img">
			            <img src={chek} width="25px" height="25px" />
		            </div>
                    <div className="search">
			            <tr>
				            <td>
					            <input type="text" placeholder="PRODUCT" className="input" onChange={(e) => filtItem(e.target.value)}/>
					            <a href="#" class="imgsearch"><img src={search} /></a>
				            </td>
			            </tr>
		            </div>
		            <div className="cleard">
			
		            </div>
                </div>
            </div>
            <div className="title">
                <h3>Your items</h3>
            </div>
            <div className="mapChartProduct">{
                Chart && Chart.map((e, index) => {
                    return (
                        <div className="prdct" key={index}>
                            <div className="imgproduct">
                                <img src = {e.Chart.Img} width="80px" />
                            </div>
                            <div className="jdlproduct">
                                <p>{e.Chart.Name}({e.Chart.Color})</p>
                                <h3>{((e.Chart.Price) * (e.itemQty)).toFixed(2)}</h3>
                            </div>
                            <div className="clr"></div>
                            <div className="bottom-act">
                                <p>Stock ready</p>
                                <p className="P">all size</p>
                                <button className="btnrmv" onClick={() => rmvItem(e.Chart.Id)}>Remove</button>
                                <Link to='/cart'>
                                    <button className="addjust" onClick= {()=> minQty(e.Chart.Id)}>
                                        -
                                    </button>
                                </Link>
                                    {e.itemQty}
                                <Link to='/cart'>
                                    <button className="addjust" onClick= {()=> addQty(e.Chart.Id)}>
                                        +
                                    </button>
                                </Link>
                               
                            </div>
                            <div className="clr2"></div>
                        </div>
                    )
                })    
            }</div>
            <div className="paymentBox">
                <div className="disc">
                    <h3>Discount up to 60%</h3>
                </div>
                <div className="disc2">
                    <h4>Shopping summary</h4>
                    <p className="p1">Total items ({totalQty} item)</p>
                    <p className="p2">{(totalPaid).toFixed(2)}</p>
                    <div className="cl"></div>
                    <h4 className="h4">Total chost</h4>
                    <h4 className="h42">{(totalPaid).toFixed(2)}</h4>
                    <div className="cl"></div>
                </div>
                <div className="btn-buy">
                    <button onClick={() => Chekout()}>Chekout</button>
                </div>
                <div className="status">
                    <h4>Payment status  :  {status}</h4>
                </div>
            </div>
            <div className="clr3"></div>
        </div>
    )
}

const mapStatetoProps =(props)=>{
	return {
        Chart: props.payment.Chart
    }
}

const mapDispatchtoProps = (dispatch) => {
	return {
      rmvItem: (id) => dispatch({
        type: 'REMOVE_ITEM',
        value: id
      }),
      addQty: (id) => dispatch({
        type: 'ADD_QTY',
        value: id
      }),
      minQty: (id) => dispatch({
        type: 'MIN_QTY',
        value: id
      }),
      filtItem: () => dispatch({
          type: 'FILTER_NAME'
      })
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Chart);