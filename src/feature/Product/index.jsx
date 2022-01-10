import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import { Box } from '@mui/system';
import ProductDetail from './pages/ProductDetail';


ProductFeature.propTypes = {

};

function ProductFeature(props) {
    const match = useRouteMatch()
    return (
        <Box pt={0}>    
            <Switch>
                <Route path={match.url} exact component={ListPage} />
                {/* <Route path={`${match.url}/:productId`} exact component={ProductDetail} />                   */}
            </Switch>
        </Box>
    );
}

export default ProductFeature;