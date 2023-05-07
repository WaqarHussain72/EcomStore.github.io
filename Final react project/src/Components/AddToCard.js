import React, { useState } from 'react'
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { useCartContext } from '../Contextapi/CartContext';


function AddToCard({ product }) {
    const { addToCard } = useCartContext();

    const { id, colors, stock } = product;
    const [color, setColors] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    return (
        <>
            <Wrapper>
                <div className='colors'>
                    <p>
                        Color:
                        {
                            colors.map((curColor, index) => {
                                return (
                                    <button
                                        key={index}
                                        style={{ backgroundColor: curColor }}
                                        className={color === curColor ? 'btnStyle active' : 'btnStyle'}
                                        onClick={() => setColors(curColor)}
                                    >
                                        {color === curColor ? <FaCheck className='checkStyle' /> : null}
                                    </button>
                                )
                            })
                        }
                    </p>
                </div>

                {/* Add to cart counter button */}
                <CartAmountToggle
                    amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease}
                />

                {/* Add global button */}
                <NavLink to="/cart"
                    onClick={() => addToCard(id, color, amount, product)}
                >
                    <Button className='btn'>Add to Cart</Button>
                </NavLink>

            </Wrapper>
        </>
    )
};

const Wrapper = styled.section`
        .colors p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .btnStyle {
            width: 2rem;
            height: 2rem;
            background-color: #000;
            border-radius: 50%;
            margin-left: 1rem;
            border: none;
            outline: none;
            opacity: 0.5;
            cursor: pointer;

            &:hover {
                opacity: 1;
            }
        }

        .active {
            opacity: 1;
        }

        .checkStyle {
            font-size: 1.4rem;
            font-weight: 800;
            color: #fff;
        }


        /* we can use it as a global one too  */
        .amount-toggle {
            margin-top: 3rem;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 1.4rem;

            button {
                border: none;
                background-color: #fff;
                cursor: pointer;
            }

            .amount-style {
                font-size: 2.4rem;
                color: ${({ theme }) => theme.colors.btn};
            }
        }

        .btn {
            font-size: 1.5rem;
            cursor: pointer;
        }
    `;

export default AddToCard