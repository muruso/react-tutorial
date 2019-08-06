import React, { Component } from 'react';
import styled from 'styled-components';



const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const SideMenu = styled.div`
  height: 100%;
  width: 150px;
  border: 1px solid black;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid pink;
`;

const TopContent = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomContent = styled.div`
  height: 60%;
  width: 100%;
`;

const BottomTab = styled.div`
  height: 15%;
  width: 100%;
  background: pink;
`;

const MultContentWrapper = styled.div`
  height: 85%;
  width: 100%;
  background: blue;
`;

const CardList = styled.div`
  width: 1200px;
  margin: 0 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  overflow-x: auto;
  overflow-y: visible;
`;

const Card = styled.div`
  box-sizing: border-box;
  min-width: 180px;
  min-height: 230px;
  margin: 0 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  background: white;
`;

const CardHeader = styled.div`
  background: skyblue;
  height: 30px;
  border-radius: 10px 10px 0 0;
  vertical-align: bottom;
  text-align: center;
`;

const CardBody = styled.div`
  height: calc(100% - 33px);
  border-radius: 0 0 10px 10px;
  border: 3px solid skyblue;
`;



class ReagentAppContainer extends Component  {
  render() {
    return(
      <Root>
        <SideMenu></SideMenu>
        <Main>
          <TopContent>
            <CardList>
              <Card 
                draggable="true"
                onDragStart={()=>{}}
              >
                <CardHeader></CardHeader>
                <CardBody></CardBody>
              </Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>
              <Card draggable="true"></Card>



            </CardList>

          </TopContent>
          <BottomContent>
            <BottomTab></BottomTab>
            <MultContentWrapper
              onDrop={()=>{alert('drag comein!');}}
            ></MultContentWrapper>
          </BottomContent>

        </Main>
      </Root>
    )
  }
}

export default ReagentAppContainer;