import { useState } from "react";
import { useQuery } from "react-query";

//Components
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

//styles
import { Wrapper } from "./App.styles";
import Item from "./ItemComponent/Item";

//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data)


  const getTotalItems = () => null

  const handleAddToCart = (clickedItem: CartItemType) => null

  const hnadleRemoveFromCart = () => null

  if(isLoading){
    return <LinearProgress />;
  }
  if(error){
    return <div>Something Went wrong</div>
  }

  return <div className="App">
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm= {4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  </div>;
};

export default App;
