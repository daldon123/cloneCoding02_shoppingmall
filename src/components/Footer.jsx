import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    
    ${mobile({ flexDirection : 'column' })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display : "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor : "#fff5f5" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 200px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Hong ShoppingMall</Logo>
            <Desc>
                이 홈페이지는 홍영호님의 리액트 클론 코딩 입니다.
                현재 국비교육중입니다. (2022.1 - 2022.7)
                rnfofl123@naver.com <br/>
                instagram : daldon123 <br/>
                mygit : daldon123 
            </Desc>
            <SocialContainer>
                <SocialIcon color='3b5999'>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashon</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/>
                김포시 양촌면 구래리 668-5 , South Korea
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/>
                055 0550 5050
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"}}/>
                rnfofl123@naver.com <br/> instagram - daldon123
            </ContactItem>
            <Payment src='https://www.pngmart.com/files/3/Major-Credit-Card-Logo-PNG-Clipart.png'/>
        </Right>
    </Container>
  )
}

export default Footer