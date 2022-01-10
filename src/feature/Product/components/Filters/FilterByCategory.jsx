import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

FilterByCategory.propTypes = {
  listCategory: PropTypes.array,
};
FilterByCategory.defaultProps = {
  listCategory: [],
};
const useStyles = makeStyles({
  categoryList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  active: {
    color: "#d0011b",
  },
  categoryItem: {
    display: "flex",
    padding: "10px 16px",
    position: "relative",
    borderBottom: "1px solid rgba(39, 39, 39, 0.1)",

    "&:hover": {
      cursor: "pointer",
      position: "relative",
      left: "3px",
      color: "blue",
    },
    "&:last-child": {
      border: "none",
    },
  },
});
function FilterByCategory(props) {
  const classes = useStyles();
  const { listCategory } = props;
  const [isActiveId, setIsActiveId] = useState(-1);
  const handleClickMenuItem = (categoryId) => {
    // if (!onChange) return;
    setIsActiveId(categoryId);
    // onChange(categoryId)
  };
  return (
    <Box>
      <Box display="flex" alignItems="center">
        <MenuIcon></MenuIcon>
        <Typography p={1} fontWeight="bold">
          Danh Mục Sản Phẩm
        </Typography>
      </Box>
      <ul className={classes.categoryList}>
        {listCategory.map((category) => {
          return (
            <li
              className={
                isActiveId === category.id
                  ? clsx(classes.categoryItem, classes.active)
                  : classes.categoryItem
              }
              key={category.id}
              onClick={() => handleClickMenuItem(category.id)}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
