import React from 'react'
import FormatPrice from '../Helper/FormatPrice';

import { RxCrossCircled } from 'react-icons/rx';
import { useCartContext } from '../Contextapi/CartContext';
import CartAmountToggle from '../Components/CartAmountToggle';

function CardItem({ id, name, image, color, price, amount }) {
    const { removeItem, setDecrease, setIncrease } = useCartContext();

    // const setDecrease = () => {
    // amount > 1 ? setAmounts(amount -1) : setAmounts(1);
    // };
    // const setIncrease = () => {
    // amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
    // }
    return (
        <>
            <div className='cart_heading grid grid-five-column'>

                {/* Item section */}
                <div className='cart-image--name'>
                    <div>
                        <figure>
                            <img src={image} alt={id} />
                        </figure>
                    </div>

                    <div>
                        <p>{name}</p>
                        <div className='color-div'>
                            <p>Color: </p>
                            <div
                                className='color-style'
                                style={{ backgroundColor: color, color: color }}>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price section */}
                <div className='cart-hide'>
                    <p>
                        <FormatPrice price={price} />
                    </p>
                </div>

                {/* Quantity section */}
                <CartAmountToggle
                    amount={amount}
                    setDecrease={() => setDecrease(id)}
                    setIncrease={() => setIncrease(id)}
                />

                {/* Subtotal section */}
                <div className='cart-hide'>
                    <p>
                        <FormatPrice price={price * amount} />
                    </p>
                </div>

                {/* Remove section */}
                <div>
                    <RxCrossCircled
                        className="remove_icon"
                        onClick={() => removeItem(id)}
                    />
                </div>
            </div>
        </>
    )
}



export default CardItem