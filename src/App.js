import { Container, Grid, Paper, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import { gql, useQuery } from "@apollo/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./feature/Product/components/ProductList";
import ProductListSkeleton from "./feature/Product/components/ProductListSkeleton";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FilterByCategory from "./feature/Product/components/Filters/FilterByCategory";
function App() {
  const { loading, error, data } = useQuery(gql`
    {
      allProducts {
        id
        name
        price
        priceOld
        amountSold
        image
        hot
        rating
      }
      allCategory {
        id
        name
      }
    }
  `);
  if (loading) return <ProductListSkeleton />;
  if (error) return <Box>{error}</Box>;
  console.log(data);
  return (
    <Box className="App">
      <Header></Header>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" padding="16px 0">
          <Link underline="hover" color="" href="/">
            Trang Chủ
          </Link>
          <Typography color="text.primary">Product</Typography>
        </Breadcrumbs>
        <Grid container spacing={0}>
          <Grid item xs={4} md={3} sm={3} lg={2.5}>
            <Paper elevation={0}>
              <FilterByCategory listCategory={data.allCategory} />
            </Paper>
          </Grid>
          <Grid item xs={8} md={9} sm={9} lg={9.5}>
            <Paper elevation={0}>
              <ProductList data={data.allProducts} />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer></Footer>
    </Box>
  );
}

export default App;
