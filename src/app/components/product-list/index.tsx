'use client'
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";
import { useProducts } from "@/hooks/useProducts";
import { useSearchBar } from "@/hooks/useSearchBar";
import { Box, Grid, GridItem, Skeleton } from '@chakra-ui/react';
import Link from "next/link";
import { useContext } from "react";
import { ProductCard } from "../product-card";
import { ProductListContainer } from "./styles";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function ProductList() {
    const { categoryValue, priorityValue, searchBarValue } = useContext(AppContext) as AppContextProviderProps
    const { data, isLoading } = useProducts(categoryValue, priorityValue)
    const [ parent, enableAnimations ] = useAutoAnimate({
        duration: 250,
        easing: "linear"
    })

    const { filteredValue } = useSearchBar(data, searchBarValue)

    return (
        <>
            {
                isLoading ? (
                    <Grid
                        display={"grid"}
                        justifyContent={"center"}
                        gridTemplateColumns={"repeat(auto-fill, 16rem)"}
                        gridTemplateRows={"repeat(auto-fit, 23.625rem)"}
                        gridRowGap={"1.5rem"}
                        gridColumnGap={"2rem"}
                        marginTop={"2rem"}
                    >
                        {Array.from({ length: 60 }).map((_, index) => (
                            <GridItem key={index}>
                                <Box 
                                    height="100%" 
                                    boxShadow="lg" 
                                    bg="white" 
                                    borderRadius="0.5rem 0.5rem 0.25rem 0.25rem"
                                    display='flex'
                                    flexDirection="column"
                                >
                                    <Skeleton 
                                        height="18.75rem" 
                                        width="100%" 
                                        mb="2" 
                                        borderTopLeftRadius="inherit"
                                        borderTopRightRadius="inherit"
                                    />
                                    <Box 
                                        display="flex" 
                                        flexDirection="column" 
                                        gap="0.5rem"
                                        flex="1" 
                                        padding="0.5rem 0.75rem"
                                    >
                                        <Skeleton height="1rem" width="100%" />
                                        <Skeleton height="1rem" width="100%" />
                                    </Box>
                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                ) : (
                    <ProductListContainer>
                        <ul ref={parent}>
                            {
                                filteredValue?.map(product => {
                                    return (
                                        <li key={product.id}>
                                            <Link href={`/product/${product.id}`} prefetch={false}>
                                                <ProductCard
                                                    image_url={product.image_url}
                                                    name={product.name}
                                                    price_in_cents={product.price_in_cents}
                                                />
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </ProductListContainer>
                )
            }
        </>
    )
}