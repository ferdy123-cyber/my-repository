import prev from'../img/Vector1.png'
import next from'../img/Vector2.png'
import chek from '../img/checkout.png'
import logo from '../img/icon.png'
import img1 from '../img/tshirt9.png'
import img2 from '../img/tshirt1.jpg'
import img3 from '../img/tshirt2.jpg'
import img4 from '../img/tshirt3.jpg'
import img5 from '../img/tshirt4.jpg'
import img6 from '../img/tshirt5.jpg'
import img7 from '../img/tshirt6.jpg'
import img8 from '../img/tshirt7.jpg'
import img9 from '../img/tshirt8.jpg'
import {connect, useStore} from 'react-redux'
import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'


const Product = ({number, tambahSatu, kurangSatu, Chart, addItem}) => {
	const totalQty = Chart.map( val =>  val.itemQty ).reduce( (a,b) => (a+b), 0 );
	const data = [
		{
			id: 1,
			image: img1,
			price: 39.99,
			discount: 19.99,
			name: "Nike casual red tshirt",
			color: "Red",
			dexcription: "Red shirt stylish to upgrade your smile",
			text: "lorem ipsum 1",
			size: "",
			sex: "Men",
			material: "100% cotton",
	
		},
		{
			id: 2,
			image: img2,
			price: 34.99,
			discount: 21.99,
			name: "Desquaret2 Icon mens Tshirt",
			color: "Grey",
			dexcription: "Short sleeves regular fit",
			text: "lorem ipsum 2",
			size: "",
			sex: "Men",
			material: "100% cotton 2",
		},
		{
			id: 3,
			image: img3,
			price: 19.99,
			discount: 16.99,
			name: "Men Tshirt 2018",
			color: "Dark green",
			dexcription: "Short sleeve mandarin Tshirt",
			text: "lorem ipsum 3",
			size: "",
			sex: "Men",
			material: "100% cotton",
		},
		{
			id: 4,
			image: img4,
			price: 16.99,
			discount: 13.99,
			name: "Standart casual Tshirt",
			color: "Purple",
			dexcription: "short sleeve cotton",
			text: "lorem ipsum 4",
			size: "",
			sex: "Men",
			material: "100% cotton",
		},
		{
			id: 5,
			image: img5,
			price: 36.99,
			discount: 33.99,
			name: "True religion men tShirt",
			color: "Brown",
			dexcription: "Long sleeve henley shirt top",
			text: "lorem ipsum 5",
			size: "",
			sex: "Men",
			material: "100% cotton",
		},
		{
			id: 6,
			image: img6,
			price: 22.99,
			discount: 18.99,
			name: "Stylish office men tshirt",
			color: "Sky blue",
			dexcription: "Sort sleeve all size",
			text: "lorem ipsum 6",
			size: "",
			sex: "Men",
			material: "100% cotton",
		},
		{
			id: 7,
			image: img7,
			price: 20.99,
			discount: 15.99,
			name: "Stay at home tshirt",
			color: "Blue tosca",
			dexcription: "cotton shrt sleeve",
			text: "lorem ipsum 7",
			size: "",
			sex: "Men",
			material: "100% cotton",
		},
		{
			id: 8,
			image: img8,
			price: 24.99,
			discount: 20.99,
			name: "Nem distro shirt",
			color: "Dark",
			dexcription: "light and cold material",
			text: "lorem ipsum 8",
			size: "",
			sex: "Men",
			material: "100% cotton",
		},
		{
			id: 9,
			image: img9,
			price: 27.99,
			discount: 25.99,
			name: "Luxury casual tshirt",
			color: "Black",
			dexcription: "Slim fit long sleeve formal",
			text: "lorem ipsum 9",
			size: "",
			sex: "Men",
			material: "100% cotton",
		}]
		
	localStorage.setItem('datas', JSON.stringify(data))
	const datas = JSON.parse(localStorage.getItem('datas'))
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
					<Link to='/'>
						<a>
			            	HOME
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
					<Link to='/product'>
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