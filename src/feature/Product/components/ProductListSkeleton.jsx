import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

ProductListSkeleton.propTypes = {
  len: PropTypes.number,
};
ProductListSkeleton.defaultProps = {
  len: 8,
};
function ProductListSkeleton({ len }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(len)).map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rectangular"
                />
                <Skeleton animation="wave" height={20} width="80%" />
                <Skeleton
                  animation="wave"
                  height={20}
                  style={{ marginBottom: 6 }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProductListSkeleton;
