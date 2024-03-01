import Image from 'next/image'
import { TrashButton } from '../trash-button'
import { CartItemContainer, QuantityPriceContainer, QuantityTrigger } from './styles'
import { priceFormat } from '@/utils/price-format'
import { CartProductItem } from '@/types/cart-product-item'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ChangeEvent } from 'react'

export function CartItem(cartItem: CartProductItem) {
    const { updateUnits } = useLocalStorage()

    function handleQuantityTrigger(e: ChangeEvent<HTMLSelectElement>) {
        updateUnits(cartItem.id, Number(e.target.value))
    }

    let unitsOptions = []
    for (let option = 1; option <= 10; option++) {
        unitsOptions.push(<option key={option} value={option}>{option}</option>)
    }

    return (
        <CartItemContainer>
            <Image src={cartItem.image_url} alt='' width={256} height={211} />
            <div>
                <div>
                    <div>
                        <h3>{ cartItem.name }</h3>
                        <TrashButton cartItemId={cartItem.id} />
                    </div>
                    <p>{ cartItem.description }</p>
                </div>
                <QuantityPriceContainer>
                    <QuantityTrigger name="" id="" defaultValue={cartItem.units} onChange={(event) => handleQuantityTrigger(event)}>
                        { unitsOptions.map(option => option) }
                    </QuantityTrigger>
                    <span>{ priceFormat(cartItem.price_in_cents) }</span>
                </QuantityPriceContainer>
            </div>
        </CartItemContainer>
    )
}