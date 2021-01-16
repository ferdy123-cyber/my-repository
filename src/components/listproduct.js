import add from '../img/add.png'
import search from '../img/search.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import data from './sample'

const List = ({ toDetail, Chart }) => {
	localStorage.setItem('datas', JSON.stringify(data))
	const [Input, setInput] = useState('')
	const datas = JSON.parse(localStorage.getItem('datas'))
	const x = datas.filter(val => (val.id) !== (''))
	console.log(x)
	
    return (
        <div className="list">
            <div class="top">
		        <div class="shopName">
			        <p>Your Shop Name</p>
		        </div>
				<Link to="/addProduct">
		        	<div className="top-img">
			        	<img src={add} width="25px" height="25px" />
		        	</div>
				</Link>
		        <div className="search">
			        <tr>
				        <td>
					        <input type="text" placeholder="PRODUCT" className="input" onChange={(e) => setInput(e.target.value)}/>
					        <a href="#" className="imgsearch"><img src={search} /></a>
				        </td>
			        </tr>
		        </div>
		        <div class="cleard">
			
		        </div>
	        </div>
            <div className="main-data">
                <div className="leftd">
			        <p>FEATURED</p>
			        <ul>
				        <li><a href="">T-SHIRT</a></li>
				        <li><a href="">JEANS</a></li>
				        <li><a href="">HAT</a></li>
				        <li><a href="">SHOES</a></li>
				        <li><a href="">JACKET</a></li>
			        </ul>
		        </div>
		        <div class="centerd">{
					datas && datas.filter((e) => {
						if (Input === ""){
							return e
						} else {
							return (e.color.toLowerCase().includes(Input.toLowerCase()))
						}
						
					}).map((e, index) => {
						console.log (e)
						return (
							<Link to='/product'>
								<div key={index} class="img1d" onClick={() => toDetail(e.id)}>
									<img src={e.image} width="185px" />
				        			<h3>{e.color}</h3>
									<p>{e.discount}</p>
			    				</div>
							</Link>
						)
					})
				}</div>    
		        
		        <div class="rightd">
			        <p>ALL</p>
			        <ul>
				        <li><a href="">FILTER 1</a></li>
				        <li><a href="">FILTER 2</a></li>
				        <li><a href="">FILTER 3</a></li>
				        <li><a href="">FILTER 4</a></li>
				        <li><a href="">FILTER 5</a></li>
			        </ul>
		        </div>
		        <div class="clear2d">
			
		        </div>
                <div class="number">
		            <div class="a">
			            <a href="#">1</a>
			            <a href="#">2</a>
			            <a href="#">3</a>
			            <a href="#">4</a>
			            <a href="#">5</a>
		            </div>
	            </div>
            </div>
        </div>
    )
}

const mapStatetoProps =(props)=>{
	return {
		Chart: props.payment.Chart,
	}
}

const mapDispatchtoProps = (dispatch) => {
	return{
		toDetail: (id) => dispatch({
			type: 'LIST_CLICK',
			value: id
		})
	}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(List)