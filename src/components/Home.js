import logo from '../img/icon.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="body">
            <div className="page1">
                <div className="judul">
                    <p>
                        Choose <b>as you want</b>
                    </p>
                    <p>
                        Pay <b>as you can</b>
                    </p>
                </div>
                <div className="listtop">
                    <ul>
                        <li className="list1"><a href="#">LATEST</a></li>
                        <li className="list1"><a href="#">ALL</a></li>
                    </ul>
                </div>
                <div className="clear">
            
                </div>
                <div className="baris2">
                    <div className="btn-shop">
                        <Link to='/product'>
                            <button>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                    <div className="text">
                        <p>
                            <b>New Consept</b> of Online Shooping
                        </p>  
                    </div>
                    <div className="clear2">
                
                    </div>
                </div>
                <div className="mini-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                </div>
                <div className="clear3">
            
                </div>
                <div className="baris3">
                    <div className="img1">
                        <h4>KEYNOTE</h4>
                        <p>SUBTITLE</p>
                    </div>
                    <div className="img2">
                        <h4>ACTIVITY</h4>
                        <p>SUBTITLE</p>
                    </div>
                    <div className="img3">
                        <h4>GALLERY</h4>
                        <p>SUBTITLE</p>
                    </div>
                    <div className="clear4">
                
                    </div>
                </div>
            </div>
            <div className="footer">
                <img src={logo}/>
            </div>
        </div>
    )
}

export default Home