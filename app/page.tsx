import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { getData } from './googleService'
import { ProductsList } from './ProductsList';

export default async function Home() {
  const {products} = await getData(process.env.SHEET_NAME ?? '');

  if (!products) {
    return null;
  }

  return (
    <>
      <ProductsList products={products} title='LATEST PRODUCTS' />
    </>
  )
}
