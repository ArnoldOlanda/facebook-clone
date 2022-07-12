import React from 'react'
import styled from 'styled-components'

export const HistoryCard = ({ createNew, name }) => {
    return (
        <Card>
            {
                createNew === 1
                    ? (
                        <BackgroundImageCreate>
                            <FooterCardCreate>
                                <HistoryAddBtn>+</HistoryAddBtn>
                                <span>
                                    Crear historia
                                </span>
                            </FooterCardCreate>
                        </BackgroundImageCreate>)
                    : (
                        <BackgroundImage>
                            <ProfileAvatar></ProfileAvatar>
                            <FooterCard>{ name }</FooterCard>
                        </BackgroundImage>
                    )
            }
        </Card>
    )
}

const Card = styled.div`
    background-color: #2e89ff;
    border-radius: 10px;
    width: 130px;
    height: 230px;
    overflow: hidden;
    color: #fff;
`
const BackgroundImageCreate = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://picsum.photos/200/300');
    display: flex;
    align-items: flex-end;
`
const FooterCardCreate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    background-color:#282828;
    font-size:14px;
    span{
        margin-bottom: 10px;
    }
`

const HistoryAddBtn = styled.div`
    position:relative;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2e89ff;
    bottom: 15px;
    font-size: 25px;
`
const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://picsum.photos/200/300');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ProfileAvatar = styled.div`
    margin: 6px;
    background-color: #000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px #2e89ff solid;
`

const FooterCard = styled.div`
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
    font-size:14px;
`