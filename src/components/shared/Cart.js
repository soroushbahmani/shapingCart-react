import React, { useContext } from 'react'
//context
import { CardContext } from '../../context/CartContextProvider'
//function
import { Shorten } from '../../helpers/function';
const Cart = (props) => {
  const { dispatch } = useContext(CardContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div>
      <img src={image} style={{ width: '100px' }} alt='img' />
      <div>
        <h3>{Shorten(title)}</h3>
        <p>{price}$</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {
          quantity > 1 ?
            <button onClick={() => dispatch({ type: "DICREASE", payload: props.data })}>-</button>
            :
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>remove</button>
        }
        <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>add card</button>

      </div>
    </div>
  )
}

export default Cart