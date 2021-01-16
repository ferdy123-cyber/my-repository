import { useState } from 'react'
import data from './sample'
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const [name, setname] = useState("")
    const [color, setcolor] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")
    const [text, settext] = useState("")
    const datas = JSON.parse(localStorage.getItem('datas'))
    const addDatas = () => {
        const newDatas = {
            id: datas.length + 1,
            image: datas[(Math.floor(Math.random()*8))].image,
            name: name,
            price: "00.00",
            color: color,
            discount: price,
            dexcription: description,
            text: text
        }
        data.push(newDatas)
        localStorage.setItem('datas', JSON.stringify(data))
        alert('ok')
    }
    return (
        <div className="A">
            <div className="addprdct">
                <h3>Add stock product</h3>
                <input placeholder="Product name" value={name} onChange={(e) => setname(e.target.value)} />
                <input placeholder="Color" value={color} onChange={(e) => setcolor(e.target.value)} />
                <input placeholder="Price" type="number" value={price} onChange={(e) => setprice(e.target.value)}  />
                <input placeholder="Description" value={description} onChange={(e) => setdescription(e.target.value)} />
                <input placeholder="Text" value={text} onChange={(e) => settext(e.target.value)} /><br />
                <Link to="/list-product">
                    <button onClick={()=> addDatas()}>Submit</button>
                </Link>
             </div>
        </div>
    )
}

export default AddProduct