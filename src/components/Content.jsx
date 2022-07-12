import React from 'react'
import styled from 'styled-components'
import { HistoryCard } from './HistoryCard'


const historyData =[
    {
        id:1,
        name:'Crear historia'
    },
    {
        id:2,
        name:'Yovi Ch'
    },
    {
        id:3,
        name:'Ronald Torres'
    },
    {
        id:4,
        name:'Khatherine CC'
    },
    {
        id:5,
        name:'Arnold Olanda'
    },

]

export const Content = () => {
  return (
    <Container>
        <CardContainer>
            {
                historyData.map(e=>(
                    <HistoryCard 
                    key={e.id} 
                    createNew={e.id} 
                    name={e.name}
                    />
                ))
            }
        </CardContainer>
        <CreatePublicationContainer>
            <div style={{
                display:'flex',
                gap:'10px',
                padding:'10px'
            }}>
                <ProfileAvatar></ProfileAvatar>
                <StyledInput type="text" placeholder='¿Que estas pensando, Arnold?'/>
            </div>
            <div style={{
                width: '100%',
                height: '0px',
                border: '0.5px solid gray'
            }}></div>
            <div style={{
                paddingTop:'10px',
                display: 'flex',
                justifyContent:'space-around',
                color: '#fff'
            }}>
                <ActionBtn>Video en directo</ActionBtn>
                <ActionBtn>Foto/Video</ActionBtn>
                <ActionBtn>Sentimiento/Actividad</ActionBtn>   
            </div>
            
        </CreatePublicationContainer>
    </Container>
  )
}

const Container = styled.div`
    width: 60%;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 30px 0;
`

const CreatePublicationContainer = styled.div`
    box-sizing: border-box;
    width: 680px;
    height: 120px;
    border-radius: 10px;
    background-color:#282828;
    margin: auto;
    padding: 5px;
`
const ProfileAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url('https://scontent.faqp2-3.fna.fbcdn.net/v/t39.30808-1/289834247_5223407884439274_8433120459964383055_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEyOFfHurUpqFfIEbP1gCDkAcoXamPMHfoByhdqY8wd-nypfJlpfytR-q9sQQi-oYDjgBOBO5xdbpmgPYkWIyB0&_nc_ohc=QtC_mqbMKj4AX-fajER&_nc_oc=AQnljK2FtwDpBRn7XYHDCnCW_ubjEhLxZU1N0UcD3G2C5kIOG0EtEkrxRUpQEBXiaks&_nc_ht=scontent.faqp2-3.fna&oh=00_AT_FOCsZpN3ky6O0kADMtVtuhduB2OiqCsSsTqSn0fcUTw&oe=62D13D94');
`

const StyledInput = styled.input`
    font-size:20px;
    padding-left: 10px;
    border: none;
    background-color: #4b4b4b;
    border-radius: 20px;
    width: 600px;
    
`
const ActionBtn = styled.div`
    width: 210px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #4b4b4b;
    }
`
