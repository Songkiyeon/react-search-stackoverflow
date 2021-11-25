import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "@mui/material";
import Loading from "./Loading";

const host = "https://api.stackexchange.com/search/advanced";
let trigger: undefined | Function;

const SC = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000084;
  `,
  Wrapper: styled.div<any>`
    display: flex;
    flex-direction: column;

    width: ${(props) => props.width ?? "500px"};
    height: ${(props) => props.height ?? "500px"};
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 2px 4px 18px -5px black;
  `,
  Title: styled.div<any>`
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 20px;
  `,
  Line: styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    height: 1px;
    margin: 10px 0px;
    background-color: gray;
  `,
  Contents: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    overflow: auto;
    width: 100%;
    > * {
      flex-grow: 0;
      flex-shrink: 0;
    }
  `,
  Footer: styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `,
  Item: styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    > .left {
      flex-grow: 0;
      flex-shrink: 0;
      width: 100px;
      height: 100%;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }
    > .right {
      width: calc(100% - 120px);
      height: calc(100% - 20px);
      padding: 10px;

      > .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        margin-bottom: 5px;
        cursor: pointer;

        &:active {
          color: grey;
        }
      }

      > .owner {
        font-size: 14px;
        color: gray;
      }
    }
  `,
};

interface IProps {
  width?: string;
  height?: string;
  title?: string;
}

function SearchStackOverFlow(props: IProps) {
  const [items, setItems] = useState<any[]>([]);
  const [active, setActive] = useState<Boolean>(false);
  const [contents, setContents] = useState<any>(null);

  const handleSearch = async (title: string, key: string = "") => {
    setActive(true);
    setContents(<Loading />);
    const response = await axios.get(
      `${host}?site=${"stackoverflow.com"}&title=${title}&key=${key}`
    );
    const data = response.data;
    const items = data.items;

    setItems(items);
  };

  const handleClose = async () => {
    setActive(false);
    setItems([]);
  };

  useEffect(() => {
    trigger = handleSearch;
  }, []);

  useEffect(() => {
    const result = items.map((el, index) => (
      <SC.Item key={"search-items-" + index}>
        <div className="left">
          <img src={el.owner.profile_image} alt={"userImg"}></img>
        </div>
        <div className="right">
          <div
            className="title"
            onClick={() => {
              window.open(el.link);
            }}
          >
            {el.title}
          </div>
          <div className="owner">by. {el.owner.display_name}</div>
        </div>
      </SC.Item>
    ));
    setContents(result);
  }, [items]);

  return (
    <>
      {active && (
        <SC.Container>
          <SC.Wrapper>
            <SC.Title>{props.title ?? "Search Result"}</SC.Title>
            <SC.Line />
            <SC.Contents>{contents}</SC.Contents>
            <SC.Line />
            <SC.Footer>
              <Button variant={"outlined"} onClick={handleClose}>
                close
              </Button>
            </SC.Footer>
          </SC.Wrapper>
        </SC.Container>
      )}
    </>
  );
}
export { SearchStackOverFlow, trigger };
