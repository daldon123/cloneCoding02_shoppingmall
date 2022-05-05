import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive';


const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding : '10px', flexDirection:'column' })}
`
const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height : '40vh' })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding : '10px' })}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width : '100%' })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;

`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({ width : '100%' })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Annoucement/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>데님 점프슈트</Title>
                <Desc>
                    꽃 착목한는 사랑의 그와 얼음과 이상이 얼마나 되는 인도하겠다는 봄바람이다. 
                    눈에 시들어 실로 주며, 꽃이 있음으로써 천고에 무한한 쓸쓸하랴? 기쁘며, 
                    속잎나고, 미묘한 오직 실로 청춘의 이것은 그러므로 것이다. 있으며, 
                    우리는 오아이스도 것은 피부가 과실이 듣기만 원질이 가장 사막이다. 
                    설레는 우리 이것은 무엇을 별과 듣는다.
                </Desc>
                <Price>$ 200</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <AddIcon/>
                    </AmountContainer>
                    <Button>장바구니 추가</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product