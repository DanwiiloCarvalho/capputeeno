import Image from 'next/image'
import mugImage from '../../../product-image/caneca.jpg'
import { TrashButton } from '../trash-button'
import { CartItemContainer, QuantityPriceContainer, QuantityTrigger } from './styles'
import { priceFormat } from '@/utils/price-format'
import { CartProductItem } from '@/types/cart-product-item'

export function CartItem(cartItem: CartProductItem) {
    let options = []
    for (let option = 1; option <= cartItem.units; option++) {
        options.push(<option key={option} value={option}>{option}</option>)
    }

    return (
        <CartItemContainer>
            <Image src={cartItem.image_url} alt='' width={256} height={211} />
            <div>
                <div>
                    <div>
                        <h3>{ cartItem.name }</h3>
                        <TrashButton />
                    </div>
                    <p>{ cartItem.description }</p>
                </div>
                <QuantityPriceContainer>
                    <QuantityTrigger name="" id="" defaultValue={cartItem.units}>
                        {/* <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option> */}
                        { options.map(option => option) }
                    </QuantityTrigger>
                    <span>{ priceFormat(cartItem.price_in_cents) }</span>
                </QuantityPriceContainer>
            </div>
        </CartItemContainer>
    )
}