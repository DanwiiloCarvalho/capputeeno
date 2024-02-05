import mugImage from '../../../product-image/caneca.jpg'
import Image from 'next/image'
import { CartItemContainer, QuantityPriceContainer, QuantityTrigger } from './styles'
import { TrashIcon } from '@/app/components/icons/trash-icon'
import { TrashButton } from '../trash-button'

export function CartItem() {
    return (
        <CartItemContainer>
            <Image src={mugImage} alt='' />
            <div>
                <div>
                    <div>
                        <h3>Caneca de cerâmica rústica</h3>
                        <TrashButton />
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab itaque voluptas voluptatem neque ipsam dolorum fugiat autem deserunt vel saepe natus, ullam error explicabo tempora corrupti et voluptatum enim tenetur dicta aut atque incidunt quidem? Illum, voluptatem earum neque, quia saepe repudiandae laboriosam animi temporibus odit quis, harum qui. Magnam totam, reprehenderit et beatae eius molestiae alias ex. Rem natus reiciendis ipsa repudiandae accusantium dolor iste recusandae porro illo, veritatis beatae quis soluta perspiciatis sint sit aliquam voluptas similique velit voluptate quas temporibus molestiae quae. Aliquam a, veniam rem culpa dolorem, ducimus porro sapiente voluptates voluptatum dignissimos dolores adipisci nisi?</p>
                </div>
                <QuantityPriceContainer>
                    <QuantityTrigger name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </QuantityTrigger>
                    <span>R$ 40,00</span>
                </QuantityPriceContainer>
            </div>
        </CartItemContainer>
    )
}