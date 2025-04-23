import { CartProductItem } from "@/types/cart-product-item"
import { calculatePropertiesProductSum } from "./calculate-property-sum"

const mockObjectList = [
    { 
        "id": "cf5ea9cd-9f43-4290-be0d-2b9588c0268c", 
        "name": "Camiseta Ramones", 
        "category": "t-shirts", 
        "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg", 
        "price_in_cents": 9827, 
        "description": "Deleo urbs beatus. Quod celebrer tergiversatio cursus versus delicate ustilo trepide via denego. Adhuc surculus comprehendo tumultus admiratio conatus eaque tot creo.", 
        "units": 3 

    }, 
    { 
        "id": "67859035-7f27-4530-89cb-33e9e345d40c", 
        "name": "Caneca Black Ring", 
        "category": "mugs", 
        "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg", 
        "price_in_cents": 9854, "description": "Pecus sopor illum supellex praesentium. Circumvenio sto timor. Tersus benevolentia at audax.",
    }
] as CartProductItem[]

describe('calculatePropertiesProductSum function', () => {
    it('should calculate the sum of the products of two given properties of a list of objects', () => {
        const returnValue = calculatePropertiesProductSum<CartProductItem>(mockObjectList, 'units', 'price_in_cents');

        expect(returnValue).toBe(0);
    })
})