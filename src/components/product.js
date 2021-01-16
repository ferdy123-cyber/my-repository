import prev from'../img/Vector1.png'
import next from'../img/Vector2.png'
import chek from '../img/checkout.png'
import logo from '../img/icon.png'
import {connect, useStore} from 'react-redux'
import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import data from './sample'


const Product = ({number, tambahSatu, kurangSatu, Chart, addItem}) => {
	localStorage.setItem('datas', JSON.stringify(data))
	const totalQty = Chart.map( val =>  val.itemQty ).reduce( (a,b) => (a+b), 0 );
	const datas = JSON.parse(localStorage.getItem('datas'))
	console.log(datas)
    return (
        <div>
            <div className="page2-left">
		        <div className="img-product">
		        	<img src={datas[number].image} id="target" />
		        </div>
		        <div className="img2-product">
			        <img id="btn1" src={prev} onClick={() => kurangSatu()} />
			        <img id="btn2" src={next} onClick={() => tambahSatu()} />
		        </div>
            </div>    
            <div className="page2-right">
		        <div className="corner-img">
					<div>
						<div className="qty"><p className="p1">{totalQty}</p></div>
					</div>
					<Link to='/cart'>
						<img src={chek} width="25px" height="25px" />
					</Link>
	            </div>
	            <div className="back">
					<Link to='/list-product'>
						<a>
			            	GO BACK
		            	</a>
					</Link>
	            </div>
	            <div className="main">
			        <p className="name-size">
						{datas[number].color}
			        </p>
		            <p className="name-size">
			            <b>{datas[number].name}</b>
		            </p>
			        <p className="diskon">
				        <b>{datas[number].discount}</b>
			        </p>
		            <p className="normal">
			            <del>{datas[number].price}</del>
		            </p>
			        <p className="lorem1">
						{datas[number].dexcription}
			        </p>
		            <p className="lorem2">
						{datas[number].text}
			        </p>
			        <p className="size">
			            Size : 
			            <select className="size">
				            <option value="medium">Medium</option>
					        <option value="small">Small</option>
					        <option value="large">Large</option>
				        </select>
			        </p>
			        <div className="minitext2">
			            <p>
				            Mens 
			            </p>
				        <p>
				            100% Cotton
			            </p>
		            </div>
					<Link>
						<button onClick={() => addItem({
							Name: datas[number].name,
							Color: datas[number].color,
							Img: datas[number].image,
							Id: datas[number].id,
							Price: datas[number].discount

						})}>
							ADD TO CART
						</button>
					</Link> 
					
	            </div>
            </div>
            <div className="clear-product">
		
	        </div>
            <div className="footer-product">
                <img src={logo} />
            </div>
	 </div>
    )
}

const mapStatetoProps =(props)=>{
	return {
		number: props.value.number,
		Chart: props.payment.Chart,
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
	  tambahSatu: () => dispatch({
		type: 'INC_NUMBER'
	  }),
	  kurangSatu: () => dispatch({
		type: 'DEC_NUMBER'
	  }),
	  addItem: (Chart) => dispatch({
		type: 'ADD_ITEM',
		Chart
	  })
	}
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Product);