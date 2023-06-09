import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ItemCard({ item }) {
  const { title, desc, image } = item;
  return (
    <Card sx={{ maxWidth: "auto" }}>
      <CardMedia sx={{ height: 140 }} image={image} title={`${title} image`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
