import React, { useContext } from 'react'
//route
import { Route, Link } from 'react-router-dom'
//helpers
import { Shorten, isInCard, quantity } from '../../helpers/function'
//context
import { CardContext } from '../../context/CartContextProvider'
//css
import style from './Product.module.css'
function Product({ ProductData }) {

    const { state, dispatch } = useContext(CardContext);

    return (
        <div className={style.container}>
            <img className={style.cardImage} src={ProductData.image} alt='img' />
            <h3>{Shorten(ProductData.title)}</h3>
            <p>{ProductData.price}</p>
            <div className={style.linkContainer}>
                <Link to={`/product/${ProductData.id}`}>Details</Link>
                <div className={style.buttonContainer}>
                    {quantity(state, ProductData.id) === 1 && <button className={style.smallButton} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: ProductData })}><i className='fa fa-trash'></i></button>}
                    {quantity(state, ProductData.id) > 1 && <button className={style.smallButton} onClick={() => dispatch({ type: "DICREASE", payload: ProductData })}>-</button>}
                    {quantity(state, ProductData.id) > 0 && <span className={style.counter}>{quantity(state, ProductData.id)}</span>}
                    {
                        isInCard(state, ProductData.id) ?
                        <button className={style.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: ProductData })}>+</button>
                        :
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: ProductData })}>Add To Cart </button>
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Product