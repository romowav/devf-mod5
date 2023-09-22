import { useState } from 'react';
import './Card.css'
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Card(props) {
    var [like, setLike] = useState(false);

    let handlerLike = () => {
        setLike(!like)
    }

    return (
    <div className='card'>
        <img src={props.item.image} alt=''></img>
        <div className='card-info'>
            <div className='name-like'>
                <h2 className='info-ele'>{props.item.title}</h2>
                <div onClick={handlerLike}>
                    {like ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}
                </div>
            </div>
            <p className='info-ele'>Nuevo celular, super cool</p>
            <p className='info-ele'><strong>${props.item.price}</strong></p>
        </div>
    </div>
    );
}

