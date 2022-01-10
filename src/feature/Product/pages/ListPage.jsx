import React, { useEffect, useState, useMemo } from 'react';
import { Box } from '@mui/system';
import { Container, Grid, Link, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import ProductListSkeleton from '../components/ProductListSkeleton';
import ProductList from '../components/ProductList';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import ProductListSort from '../components/ProductListSort';
// import ProductFilters from '../components/ProductFilters';
// import FilterViewer from '../components/FilterViewer';
// import { useHistory, useLocation } from 'react-router';
// import queryString from 'query-string'
import Breadcrumbs from '@mui/material/Breadcrumbs';
ListPage.propTypes = {

};

function ListPage(props) {
    return (
        <Box>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" padding='16px 0'>
                    <Link underline="hover" color="" href="/">
                        Trang Chủ
                    </Link>
                    <Typography color="text.primary">Product</Typography>
                </Breadcrumbs>
                <Grid container spacing={0}>
                    <Grid item xs={4} md={3} sm={3} lg={2.5}>
                        <Paper elevation={0}>
                            {/* <ProductFilters filters={filters} onChange={handleFiltersChange} /> */}
                        </Paper>

                    </Grid>
                    <Grid item xs={8} md={9} sm={9} lg={9.5}>
                        <Paper elevation={0}>
                            {/* <ProductListSort currentSort={filters.sortBy} onChange={handleOnChageSort} /> */}
                            {/* <FilterViewer filters={filters} onChange={handleChageFilterViewer} /> */}
                            
                                {/* <ProductListSkeleton /> : <ProductList data={productList} /> */}
                            

                            {/* <Stack spacing={2} p={3} alignItems="center">
                                <Pagination
                                    count={Math.ceil(countProduct / filters.perpage)}
                                    page={filters.page}
                                    size="large"
                                    color='primary'
                                    onChange={handleChangePage}
                                />
                            </Stack> */}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;