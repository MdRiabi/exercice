import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import { PriceContext, ItemContext } from '../../App'

function ComponentB() {
    const price = useContext(PriceContext);
    const item = useContext(ItemContext);
    return (

        <div>{price} {item} </div>
    )
}

export default ComponentB
