import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { makeStyles } from "@mui/styles";

ProductItem.propTypes = {
  product: PropTypes.object,
};
ProductItem.defaultProps = {
  product: {},
};

const useStyles = makeStyles({
  productitem: {
    padding: "20px 10px",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1);",
      transform: "translateY(-2px)",
    },
  },
  title: {
    height: "50px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },
  favourite: {
    display: "inline-block",
    color: "white",
    backgroundColor: "rgb(246, 63, 46);",
    position: "absolute",
    top: "10px",
    left: "8px",
    padding: "2px 4px",
    fontSize: "14px",
    fontWeight: "500",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
  },
  sale: {
    width: "40px",
    position: "absolute",
    right: "8px",
    top: "0px",
    height: "36px",
    backgroundColor: "rgba(230,197, 47, 0.5)",
    borderBottomRightRadius: "4px",
    borderBottonLeftRadius: "4px",
    borderTopRightRadius: "2px",
    fontWeight: "500",
    textAlign: "center",
    fontSize: "13px",
    padding: "2px",
  },
});
function ProductItem({ product }) {
  const classes = useStyles();
  const image_url = product.image !== "" ? product.image : "";
  return (
    <Box className={classes.productitem}>
      <Box padding={1}>
        {image_url !== "" ? (
          <img src={image_url} alt={product.name} width="100%"></img>
        ) : (
          <Skeleton height="100%" animation="wave" variant="rectangular" />
        )}
      </Box>
      <Typography fontWeight="700" className={classes.title}>
        {product.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 0",
        }}
      >
        <Rating name="read-only" size="small" value={product.rating} readOnly />
        <Typography>Đã bán {product.amountSold}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            color: "#888",
            fontSize: "14px",
            textDecoration: "line-through",
          }}
        >
          {product.priceOld} $
        </Typography>
        <Typography
          sx={{
            color: "rgb(246, 63, 46)",
            marginLeft: "8px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {product.price} $
        </Typography>
      </Box>

      <Button variant="contained" color="success" fullWidth>
        Mua Ngay
      </Button>
      {product.hot && <Box className={classes.favourite}>Hot</Box>}

      {product.sale_percent > 0 && (
        <Box className={classes.sale}>{product.sale_percent}% GIẢM</Box>
      )}
    </Box>
  );
}

export default ProductItem;
