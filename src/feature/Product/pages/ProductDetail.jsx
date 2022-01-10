import { Breadcrumbs, Container, Grid, Link, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ProductDetailDescription from '../components/ProductDetailDescription';
import ProductDetailImage from '../components/ProductDetailImage';
import ProductInfo from '../components/ProductInfo';
import useProductDetail from '../hooks/useProductDetail';

ProductDetail.propTypes = {

};
const useStyles = makeStyles({
    root: {

    },
    right: {
        padding: '8px',
    },
    left: {
        padding: '8px',
        borderRight: '1px solid #f4f4f4'
    }

});
function ProductDetail(props) {
    const classes = useStyles()
    const match = useRouteMatch()
    const { url } = useRouteMatch()
    const { product, loading } = useProductDetail(match.params.productId)
    if (loading) {
        return <Box>Loading</Box>
    }
    return (
        <Box>
            
            <Container>
            <Breadcrumbs aria-label="breadcrumb" padding='16px 0'>
                <Link underline="hover" color="" href="/">
                    Trang Chủ
                </Link>
                <Link underline="hover" color="" href="/product">
                    Product
                </Link>
                <Typography color="text.primary">{product.name}</Typography>
            </Breadcrumbs>
                <Paper elevation={0}>
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={6} md={4} lg={4} className={classes.left}>
                            <ProductDetailImage listProductImage={product.img_url} />
                        </Grid>

                        <Grid item xs={6} sm={6} md={8} lg={8} className={classes.right}>
                            <ProductInfo product={product} />
                        </Grid>
                    </Grid>

                </Paper>
                <Paper elevation={0} sx={{ margin: '30px 0px' }}>
                    <ProductDetailDescription product={product} />


                </Paper>



            </Container>

        </Box>
    );
}

export default ProductDetail;