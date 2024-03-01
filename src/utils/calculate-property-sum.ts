
export function calculatePropertiesProductSum<T extends Object>(objectsArray: T[], propertyName1: string, propertyName2: string): number {

    for (const obj of objectsArray) {
        
        const exists: boolean = obj.hasOwnProperty(propertyName1) && obj.hasOwnProperty(propertyName2)
        
        if (exists) {
            const result = objectsArray.map((objectItem) => {
                let property1Value = 0
                let property2Value = 0

                for (const key in objectItem) {
                    if (key === propertyName1) {
                        if (typeof objectItem[key] == "number") {
                            property1Value = objectItem[key] as number
                        } 
                    }
                    if (key === propertyName2) {
                        if (typeof objectItem[key] == "number") {
                            property2Value = objectItem[key] as number
                        }
                        
                    }
                }

                return property1Value * property2Value
            }).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

            return result
        }
    }
    return 0
}