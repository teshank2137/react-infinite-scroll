import React from "react";
import { Quote, Author } from "./ListItem.styled";

const ListItem = ({ quote, author }) => {
  return (
    <>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </>
  );
};

export default ListItem;
