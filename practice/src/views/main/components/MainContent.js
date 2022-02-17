import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import SwipeToDelete from 'react-swipe-to-delete-component';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';

const MainContent = () => {

  const [isData, setIsData] = useState([]);

  

  const Els = useRef([])
  // ref로 li 담기

  useEffect(() => {
    let arr = []
    let obj = {}
    new Array(10).fill().forEach((item, index) => {
      obj = { name: `나는 ${index + 1}이름`, text: `${index + 1}이 쓴 내용입니다.` }
      arr.push(obj)
    })

    setIsData(arr);
  }, [])



  

  return (
    <Container>
      <Wrap>
        <Ul>
          {
            isData?.map((item, index) => {
              const {name, text} = item
              return (
                <SwipeToDelete key={index} background={false}>
                  <Li 
                    ref={(el) => {Els.current[index] = el}}
                    // map을 돌렸을 때 ref에 queryselectAll 하는 것과 같음?
                    
                  ><DIV>{name}/{text}</DIV><Delete>삭제</Delete></Li>
                </SwipeToDelete>
                  
                
                
              )
            })
          }
        </Ul>
      </Wrap>
    </Container>
  );
};

export default MainContent;

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
  width: calc(100% + 100px); height: 50px;
  border-bottom: 1px solid #efefef;
  cursor: pointer;
  background-color: #fff;

  &:last-child { border-bottom: none; }
`;

const DIV = styled.div`
  width:calc(100% - 100px); height: 100%;
  line-height: 50px;
  display:inline-block;
`;

const Delete = styled.div`
  width:100px; height: 100%;
  color: #fff; line-height: 50px;
  display:inline-block;
  background: tomato;
  
`;