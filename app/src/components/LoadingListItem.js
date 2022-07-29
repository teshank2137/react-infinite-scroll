import React from "react";
import { Skeleton } from "@chakra-ui/react";
import { Quote, Author } from "./ListItem.styled";
import ListItemContainer from "./ListItem.styled";

const LoadingListItem = () => {
  return (
    <ListItemContainer>
      <Skeleton>
        <Quote>Lorem Ispuim</Quote>
      </Skeleton>
      <Skeleton>
        <Author> Lorem Ispuim </Author>
      </Skeleton>
    </ListItemContainer>
  );
};

export default LoadingListItem;
