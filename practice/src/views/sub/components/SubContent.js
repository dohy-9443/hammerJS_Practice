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
  
  const [isData, setIsData] = useState([]);
  const [clickData, setClickData] = useState(false)

  const Els = useRef([])
  // ref로 li 담기

  useEffect(() => {
    

    setIsData([
      { name: `나는 1이름`, text: `1이 쓴 내용입니다.` },
      { name: `나는 2이름`, text: `2이 쓴 내용입니다.` },
      { name: `나는 3이름`, text: `3이 쓴 내용입니다.` },
      { name: `나는 4이름`, text: `4이 쓴 내용입니다.` },
      { name: `나는 5이름`, text: `5이 쓴 내용입니다.` },
      { name: `나는 6이름`, text: `6이 쓴 내용입니다.` },
      { name: `나는 7이름`, text: `7이 쓴 내용입니다.` },
      { name: `나는 8이름`, text: `8이 쓴 내용입니다.` },
      { name: `나는 9이름`, text: `9이 쓴 내용입니다.` },
      { name: `나는 10이름`, text: `10이 쓴 내용입니다.` },
    ]);
  }, [])

  useEffect(() => {
    console.log(isData);
  }, [isData])

  const del = (index) => {
    let copyData = [...isData];
    copyData.splice(index, 1);
    setIsData(copyData)
  }


  const trailingActions = (index) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        
      >
        <Delete>삭제</Delete>
      </SwipeAction>
    </TrailingActions>
  );
  

  return (
    <Container>
      <Wrap>
        <Ul>
          {
            isData?.map((item, index) => {
              const {name, text} = item
              return (
                  <Li key={index}
                    ref={(el) => {Els.current[index] = el}}
                    // map을 돌렸을 때 ref에 queryselectAll 하는 것과 같음?
                    
                  >
                    <SwipeableList type={ListType.IOS}>
                      <SwipeableListItem 
                        trailingActions={trailingActions(index)}
                        swipeLeft={{action: () => { del(index) }}}
                        
                      >
                        <DIV>{name}/{text}</DIV>
                      </SwipeableListItem>
                    </SwipeableList>
                  </Li>

                
                  
                
                
              )
            })
          }
        </Ul>
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

const Ul = styled.ul`
  width: 400px;
  border: 2px solid #b9b9b9;
  overflow: hidden;
`;

const Li = styled.li`
  width: calc(100%); height: 50px;
  border-bottom: 1px solid #efefef;
  cursor: pointer;
  background-color: #fff;

  &:last-child { border-bottom: none; }
`;

const DIV = styled.div`
  width:calc(100%); height: 100%;
  line-height: 50px;
  display:inline-block;
`;

const Delete = styled.div`
  width:100px; height: 100%;
  color: #fff; line-height: 50px;
  display:inline-block;
  background: tomato;
  text-align: center;
`;