import React, { useRef, useCallback } from "react";
import useGetItems from "../hooks/useGetItems";
import ListItem from "./ListItem";
import ListContainer from "./List.styled";
import ListItemLoading from "./LoadingListItem";
import ListItemContainer from "./ListItem.styled";

const List = () => {
  const [items, loading, error, reload] = useGetItems();
  const observer = useRef();
  const lastItemElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            reload();
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, reload]
  );

  return (
    <ListContainer>
      {items.map((item, index) => {
        if (items.length === index + 1) {
          return (
            <ListItemContainer ref={lastItemElement} key={item.id}>
              <ListItem key={item.id} author={item.author} quote={item.quote} />
            </ListItemContainer>
          );
        }
        return (
          <ListItemContainer key={item.id}>
            <ListItem author={item.author} quote={item.quote} />
          </ListItemContainer>
        );
      })}
      {loading && <ListItemLoading />}
      {error && <p>Error: {error.message}</p>}
    </ListContainer>
  );
};

export default List;
