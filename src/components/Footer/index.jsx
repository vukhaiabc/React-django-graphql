import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
Footer.propTypes = {};
const useStyles = makeStyles({
  root: {
    marginTop: "40px",
  },
  title: {
    fontWeight: "700",
    color: "#383848",
    lineHeight: "30px",
  },
  listLink: {
    listStyleType: "none",
    padding: "0",
    "& > li": {
      padding: "6px 0",
      fontSize: "13px",
      color: "#999",
    },
    "& > li > a": {
      color: "#555",
      fontWeight: "500",
      textDecoration:'none'
    },
    "& > li > a:hover": {
      textDecoration: "underline",
    },
  },
  footerIcon: {
    margin: "16px 0px",
  },
  footerIconItem: {
    padding: "0px 4px",
    cursor: "pointer",
  },
  license: {
    lineHeight: "50px",
    margin: "auto",
  },
  transport: {
    display: "flex",
    "&>a": {
      marginRight: "15px",
    },
  },
});
function Footer(props) {
  const classes = useStyles();
//   const { url } = useRouteMatch();
  const url = "/";
  return (
    <Box className={classes.root}>
      <Paper elevation={0}>
        <Container>
          <Grid container padding>
            <Grid item sm={4} md={3} lg={3}>
              <Typography variant="" className={classes.title}>
                Hỗ trợ khách hàng
              </Typography>
              <ul className={classes.listLink}>
                <li>
                  <Link to={url}>Các câu hỏi thường gặp</Link>
                </li>
                <li>
                  <Link to={url}>Gửi yêu cầu hỗ trợ</Link>
                </li>
                <li>
                  <Link to={url}>Hướng dẫn đặt hàng</Link>
                </li>
                <li>
                  <Link to={url}>Phương thức vận chuyển</Link>
                </li>
                <li>
                  <Link to={url}>Chính sách đổi trả</Link>
                </li>
                <li>
                  <Link to={url}>Hướng dẫn trả góp</Link>
                </li>
                <li>
                  <Link to={url}>Chính sách nhập khẩu</Link>
                </li>
                <li>
                  <Link to={url}>Hỗ trợ khách hàng:hotro@tiki.vn</Link>
                </li>
                <li>
                  <Link to={url}>Báo lỗi bảo mật: security@tiki.vn</Link>
                </li>
              </ul>
            </Grid>
            <Grid item sm={4} md={3} lg={3}>
              <Typography variant="" className={classes.title}>
                Về Tiki
              </Typography>
              <ul className={classes.listLink}>
                <li>
                  <Link to={url}>Giới thiệu Tiki</Link>
                </li>
                <li>
                  <Link to={url}>Tuyển dụng</Link>
                </li>
                <li>
                  <Link to={url}>Chính sách bảo mật thanh toán</Link>
                </li>
                <li>
                  <Link to={url}>Chính Sách bảo mật thông tin cá nhân</Link>
                </li>
                <li>
                  <Link to={url}>Chính sách giải quyết khiếu nại</Link>
                </li>
                <li>
                  <Link to={url}>Điều khoản sử dụng</Link>
                </li>
                <li>
                  <Link to={url}>Giới thiệu Tiki Xu</Link>
                </li>
                <li>
                  <Link to={url}>Bán hàng doanh nghiệp</Link>
                </li>
              </ul>
            </Grid>
            <Grid item sm={4} md={3} lg={3}>
              <Typography variant="" className={classes.title}>
                Phương Thức Thanh Toán
              </Typography>
              <ul className={classes.listLink}>
                <li>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/logo-visa.png"
                      alt=""
                    />
                  </Link>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/logo-master.png"
                      alt=""
                    />
                  </Link>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/logo-jcb.png"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/logo-samsungpay.png"
                      alt=""
                    />
                  </Link>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/logo-atm.png"
                      alt=""
                    />
                  </Link>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/logo-vnpay.png"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
              <Typography variant="" color="#444" className={classes.title}>
                Đơn vị vận chuyển
              </Typography>
              <ul className={classes.listLink}>
                <li className={classes.transport}>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/nhattin.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/vnpost.jpg"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link to={url}>
                    <img
                      src="https://hoanghamobile.com/Content/web/img/logo-bct.png"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item sm={4} md={3} lg={3}>
              <Typography variant="" className={classes.title}>
                Kết nối với chúng tôi
              </Typography>
              <Box className={classes.footerIcon}>
                <FacebookOutlinedIcon
                  color="primary"
                  fontSize="large"
                  className={classes.footerIconItem}
                />
                <YouTubeIcon
                  sx={{ color: "red" }}
                  fontSize="large"
                  className={classes.footerIconItem}
                />
                <InstagramIcon
                  sx={{ color: "#e80a1b" }}
                  fontSize="large"
                  className={classes.footerIconItem}
                />
              </Box>
              <Typography variant="" color="#444" className={classes.title}>
                Tải ứng dụng trên điện thoại
              </Typography>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={6} sm={6} md={4} lg={4}>
                  <img
                    width="100%"
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
                    alt="QR"
                  />
                </Grid>
                <Grid item md={6} lg={6}>
                  <Link to="/">
                    <img
                      width="100%"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                      alt=""
                    />
                  </Link>
                  <Link to="/">
                    <img
                      width="100%"
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                      alt=""
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Grid container>
        <Box className={classes.license}>@ 2021 - Bản quyền thuộc về Fabbi</Box>
      </Grid>
    </Box>
  );
}

export default Footer;
