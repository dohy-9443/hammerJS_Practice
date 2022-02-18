//react
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type as ListType,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


export default function SubContent() {
  
  const [isData, setIsData] = useState([
    { id: 0, name: `나는 1이름`, text: `1이 쓴 내용입니다.` },
    { id: 1, name: `나는 2이름`, text: `2이 쓴 내용입니다.` },
    { id: 2, name: `나는 3이름`, text: `3이 쓴 내용입니다.` },
    { id: 3, name: `나는 4이름`, text: `4이 쓴 내용입니다.` },
    { id: 4, name: `나는 5이름`, text: `5이 쓴 내용입니다.` },
    { id: 5, name: `나는 6이름`, text: `6이 쓴 내용입니다.` },
    { id: 6, name: `나는 7이름`, text: `7이 쓴 내용입니다.` },
    { id: 7, name: `나는 8이름`, text: `8이 쓴 내용입니다.` },
    { id: 8, name: `나는 9이름`, text: `9이 쓴 내용입니다.` },
    { id: 9, name: `나는 10이름`, text: `10이 쓴 내용입니다.` },
  ]);
  const [clickData, setClickData] = useState(0)

  const Els = useRef([])
  // ref로 li 담기

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    
  }, [isData])
  
  const del = () => {
    console.log('실행')
    Els.current.forEach((el, index) => {
      console.log(el.listElement.classList.contains('swipeable-list-item__content--remove'))
      if (el.listElement.classList.contains('swipeable-list-item__content--remove')) {
        console.log(index)
        setClickData(index)
      }
    })
    setIsData(isData.splice(clickData, 1))
    console.log(isData)
  }
 
  const trailingActions = (index) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => {}}
      >
        <Delete>삭제</Delete>
      </SwipeAction>
    </TrailingActions>
  );
  

  return (
    <Container>
      <Wrap>
        <Center>
          <SwipeableList type={ListType.IOS}>
            {
              isData?.map((item, index) => {
                const {name, text} = item
                return (
                  <SwipeableListItem key={index}
                    trailingActions={trailingActions(index)}
                    ref={(el) => {Els.current[index] = el}}
                    // map을 돌렸을 때 ref에 querySelectorAll과 같음?
                  >
                    <DIV>{name}/{text}</DIV>
                  </SwipeableListItem>
                )
              })
            }
          </SwipeableList>
        </Center>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%; height: 80vh;
`;

const Wrap = styled.div`
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
`;

const DIV = styled.div`
  width: 100%; height: 100%;
  line-height: 50px;
  display:inline-block;
  border-bottom: 1px solid #333;
  cursor: pointer;
`;

const Center = styled.div`
  width: 400px;
  border: 2px solid #333;
  border-bottom: 1px solid #333;

  ${(DIV)}:last-child {
    
  }
`;

const Delete = styled.div`
  width:100px; height: 100%;
  color: #fff; line-height: 50px;
  display:inline-block;
  background: tomato;
  text-align: center;
  cursor: pointer;
`;