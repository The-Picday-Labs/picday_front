import React from 'react';
import styled from 'styled-components';

// LoginPage 컴포넌트
const LoginPage = () => {
    return (
      <Wrapper>
          <Container>
            <Contents>
                <LogoBox className='box'>
                    <a href="/">
                        <LogoImage src="../img/LOGO_Horizontal250.png" alt="로고"/>
                    </a>
                </LogoBox>
                <LoginBox className='box'>
                    <LoginForm method="POST">
                        <Row>
                            <label htmlFor="email">이메일</label>
                            <InputBoxElement type="text" id="email"/>
                        </Row>
                        <Row>
                            <label htmlFor="password">비밀번호</label>
                            <InputBoxElement type="password" id="password"/>
                        </Row>
                        <Row>
                            <BtnWrap>
                                <LoginBtn>로그인</LoginBtn>
                            </BtnWrap>
                        </Row>
                    </LoginForm>
                </LoginBox>
                <UserBox className='box'>
                    <span>
                        <a href="/">비밀번호찾기</a>
                    </span>
                    <div>
                        <a href="/join">회원가입</a>
                    </div>
                </UserBox>
            </Contents>
          </Container>
      </Wrapper>
    )
}

export default LoginPage;

// Styled-components
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
`

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
`

const LogoBox = styled.div`
display: flex;
justify-content: center;
width: 80%;
margin: 0;
padding: 5px;
`

const LogoImage = styled.img`
width: 350px;
`

const LoginBox = styled.div`
width: 80%;
padding: 5px;
`

const LoginForm = styled.form`
display: flex;
flex-direction: column;
`

const Row = styled.div`
margin-bottom: 20px;
`

const InputBoxElement = styled.input`
width: 100%;
padding: 10px;
margin-top: 5px;
`

const BtnWrap = styled.div`
display: flex;
justify-content: center;
`

const LoginBtn = styled.button`
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
    box-shadow: 0 0 10px 5px rgba(5, 5, 5, 0.2);
}
`

const UserBox = styled.div`
width: 80%;
padding-left: 170px;
padding-right: 170px;
display: flex;
justify-content: space-around;
`
