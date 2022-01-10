import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Container, Grid, Link, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import Breadcrumbs from '@mui/material/Breadcrumbs';

ProductList.propTypes = {
  data: PropTypes.array,
};
ProductList.defaultProps = {
  data: [],
};
function ProductList({ data }) {
  return (
    <Box>
        <Grid container>
          {data.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductItem product={product} />
              </Grid>
            );
          })}
        </Grid>
    </Box>
  );
}

export default ProductList;
