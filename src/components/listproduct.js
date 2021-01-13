import chek from '../img/checkout.png'
import search from '../img/search.png'
import logo from '../img/icon.png'
import { useState } from 'react'

const List = () => {
	const [num, setnum] = useState(1);
	const incnum = () => {
		setnum(num + 1);
	}
	console.log(num)
    return (
        <div className="list">
            <div class="top">
		        <div class="shopName">
			        <p>Your Shop Name</p>
		        </div>
		        <div class="top-img">
			        <img src={chek} width="16px" height="16px" />
		        </div>
		        <div class="search">
			        <tr>
				        <td>
					        <input type="text" placeholder="PRODUCT" class="input"/>
					        <a href="#" class="imgsearch"><img src={search} /></a>
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
		        <div class="centerd">
			        <div class="img1d" onclick="click1()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img2d" onclick="click2()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img3d" onclick="click3()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img4d" onclick="click4()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img5d" onclick="click5()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img6d" onclick="click6()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img7d" onclick="click7()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img8d" onclick="click8()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
			        <div class="img9d" onclick="click9()">
				        <h4>TITLE HERE</h4>
				        <p>CATEGORY</p>
			        </div>
		        </div>
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
				<button onClick={incnum}>inc</button>
				<p>{num}</p>
            </div>
			<div className="footer">
                <img src={logo}/>
            </div>
        </div>
    )
}

export default List