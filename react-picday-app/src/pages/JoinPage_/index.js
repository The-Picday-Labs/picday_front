import React from 'react';
import styled from 'styled-components';




const JoinPage = () => {
  return (
    <Wrapper>
      <Container>
        <Contents>
          <LogoBox className='box'>
            <a href="/">
              <LogoHorizontal src="../img/LOGO_Horizontal250.png" alt="로고" />
            </a>
          </LogoBox>
          <JoinBox className='box'>
            <JoinForm>
              <Row>
                <label htmlFor="name">이름</label>
                <InputBoxElement type="text" id="name" />
              </Row>
              <Row>
                <label htmlFor="email">이메일주소</label>
                <InputGroup>
                  <InputBoxElement type="text" id="email" className="w-75" />
                  <ConfirmBtn>인증번호발송</ConfirmBtn>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <InputBoxElement type="text" className="w-75" />
                  <ConfirmBtn>인증번호확인</ConfirmBtn>
                </InputGroup>
              </Row>
              <Row>
                <label htmlFor="password">비밀번호</label>
                <InputBoxElement type="password" id="password" />
              </Row>
              <Row>
                <label htmlFor="confirm-password">비밀번호 확인</label>
                <InputBoxElement type="password" id="confirm-password" />
              </Row>
              <Row>
                <BtnWrap>
                  <JoinBtn>가입하기</JoinBtn>
                </BtnWrap>
              </Row>
            </JoinForm>
          </JoinBox>
        </Contents>
      </Container>
    </Wrapper>
  );
};

export default JoinPage;

const Wrapper = styled.div`
  height: 100vw;
  height: 100vh;
  display: flex;
`;

const Container = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  padding: 0;
`;

const Contents = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FCFCFC;
  box-shadow: 10px 10px 15px 5px rgba(0, 0, 0, 0.1);
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0;
  padding: 5px;
`;

const LogoHorizontal = styled.img`
  width: 350px;
`;

const JoinBox = styled.div`
  width: 80%;
  padding: 5px;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin-bottom: 1rem;
`;

const InputBoxElement = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const ConfirmBtn = styled.button`
  width: 120px;
  border: 2px solid #24272b;
  background-color: #24272b;
  color: #FCFCFC;
  transition: background-color 0.8s, color 0.8s;
  &:hover {
    cursor: pointer;
    background-color: #FCFCFC;
    color: #24272b;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const JoinBtn = styled.button`
  margin-top: 30px;
  width: 200px;
  height: 50px;
  padding: 0.4rem 1.6rem;
  background-color: #24272b;
  color: #FCFCFC;
  cursor: pointer;
  transition: transform 0.6s, box-shadow 0.6s, background-color 0.8s, color 0.8s;
  &:hover {
    transform: scale(1.03);
    background-color: #24272b;
    box-shadow: 0 0 10px 5px rgba(5, 5, 5, 0.2);
  }
`;
