import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
const ItemCard = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 1, backgroundColor: "#495e572b" }}>
        <CardMedia
          sx={{ height: 300, width: 300 }}
          image={props.product.image}
          title={props.product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.product.title}
            <Typography gutterBottom variant="h6" component="div" color="green">
              {props.product.price}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Stack direction="row" spacing={0.5}>
              <a href="">Order a Delivery</a>
              <DeliveryDiningIcon />
            </Stack>
          </Button>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default ItemCard;
