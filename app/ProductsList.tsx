import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

interface Props {
  title: string;
  products: Array<{
    name: string,
    image: string,
    price: number
  }>
}
export const ProductsList = ({ title, products }: Props) => (
  <>
    <Typography variant='h6'>
      {title}
    </Typography>
    <Box sx={{
      display: 'flex',
      gap: 1,
      marginTop: 2
    }}>
      {products.map(({ image, price, name }) => (
        <Card sx={{ width: 300 }} key={name}>
          <CardMedia
            sx={{ height: 140 }}
            image={image}
            title={name}
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {name}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography variant="body1" color="text.primary">
              {price}€
            </Typography>
      </CardActions>
        </Card>
      ))}
    </Box>
  </>
);

