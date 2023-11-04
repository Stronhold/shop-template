import { Typography } from "@mui/material";
import { getData } from "../googleService";
import { ProductsList } from "../ProductsList";

export default async function Category({params}: {params: {category: string}}) {
  const {category} = params;
  if (!process.env.CATEGORIES?.split(',').map(c => c.toLowerCase()).includes(category.toLowerCase())) {
    return <Typography>No category found</Typography>;
  }
  const {products} = await getData(category);

  if(!products) {
    return null;
  }

  return (
    <>
      <ProductsList products={products} title={category} />
    </>
  )
}
