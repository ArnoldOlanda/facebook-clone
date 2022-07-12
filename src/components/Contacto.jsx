import { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext';

export const Contacto = ({props}) => {

  const { onMostrarChange} = useContext(GlobalContext);
  

  return (
    <DivCont onClick={ ()=> onMostrarChange(true) }>
      <ImgCont/>
      <p style={{ color: 'white',fontFamily: 'Segoe UI Historic', fontsize:'15px'}}>hola</p>
    </DivCont>
  )
}

const DivCont = styled.div`
  display: flex;
  height: 52px;
  
  border-radius: 10px;
  
  align-items: center;
  margin: auto;
  &:hover{
    background-color: #4A4A4A;
        
  }
`

const ImgCont = styled.label`

    display: flex;
    width: 36px;
    height: 36px;
    background: #3a3b3c;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    
   
`