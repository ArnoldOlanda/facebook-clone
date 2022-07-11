import React from 'react'
import styled from 'styled-components'
import { BsChevronCompactDown } from 'react-icons/bs'

export const SideBar = () => {
  return (
    <Container>
        <Menu>
            
            <MenuItem><Profile></Profile> Arnold Olanda Muñoz</MenuItem>
            <MenuItem><img src ='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeHlIqY31SSrGAnvXcnFFy04qfpKmA4GtxSp-kqYDga3FCasjmWKYW7BNZrRxxGnd-_DzuTx5o2uNrpd8tA--lR2' /> Amigos</MenuItem>
            <MenuItem><img src='https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeFl3VYjpLQHor_TYOhRiVXi-vsl1K9A-9v6-yXUr0D725apUjJhynQ2FBwfQqquzM8bjMvXh1NebZUi2dn5iP80'/> Marketplace</MenuItem>
            <MenuItem><img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeF2l0pKm-ArqEoysDntGocV2NRDTXGHJ53Y1ENNcYcnnR97j9dP9UuavQFi2EI26yIuEOfiK4dH7ZBLUWAImeje' /> Watch</MenuItem>
            <MenuItem><img src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeEoeUzuuWWnLufeatfz7EVn-5kYScafj0T7mRhJxp-PRE6ChgQAgHCOrVNTcWb84lCxN6pxycNaxLbK2a47IrQF' /> Guardado</MenuItem>
            <MenuItem><img src='https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeFAOXprykQoOQtUfdBV_2lbtEPFOzh_t-u0Q8U7OH-365t35rgSX79cz0MdnZcjFG-jPPa6SF9odNRRDN8qkozq' /> Paginas</MenuItem>
            <MenuItem><div><BsChevronCompactDown /></div> Ver mas</MenuItem>

        </Menu>
        <Separator />
        <Accesos>
            <MenuItem><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeFAOXprykQoOQtUfdBV_2lbtEPFOzh_t-u0Q8U7OH-365t35rgSX79cz0MdnZcjFG-jPPa6SF9odNRRDN8qkozq" /> E-Sports Peru</MenuItem>
            <MenuItem><img src="https://scontent.faqp2-2.fna.fbcdn.net/v/t39.2081-6/851577_10151403722722055_418822655_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeGb1EN89qbIzfuu0TZHYm-rZ5SsEWoEwP1nlKwRagTA_Q8sWxDNXJvSCE8yY1Yj_D_hXa1Sbz51cNdnvtVIdCaX&_nc_ohc=g1l9sVjinZgAX-xa1KH&_nc_ht=scontent.faqp2-2.fna&oh=00_AT8I3g5fxZ5V61EaU8Xp4TUDqZC1N99olNF57czunP1xrw&oe=62AADE80" alt="" /> Ajedrez</MenuItem>
            <MenuItem><img src="https://scontent.faqp2-2.fna.fbcdn.net/v/t39.2081-6/22088589_1654976451201719_5191478939503034368_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeHDG2tXOirNCzzMnD8wVBKC2pOLRy8vZ07ak4tHLy9nTpIvGe1D4s5sNzIFVne9Yn6DOvZa3m-OypeVs4mLacNf&_nc_ohc=6FvboV9IadEAX8SjS40&_nc_ht=scontent.faqp2-2.fna&oh=00_AT9UyyxT8z3hFwjQZgkmZA078ZgG0w_QzAjFH3edtEHwbQ&oe=62AA3BC2" alt="" /> Candy Crush Saga</MenuItem>
            <MenuItem><img src="https://scontent.faqp2-2.fna.fbcdn.net/v/t39.2081-6/12057001_427250474066399_2006674606_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeGYxqq0BAS_RIsU2q8oduCEId0QZhQuqb4h3RBmFC6pvodgaCiONWyoZtQwZ0YhOJ1oFpqwWPjie6STvylCaI8B&_nc_ohc=8YvCZlgp0GMAX9eL-Tu&_nc_ht=scontent.faqp2-2.fna&oh=00_AT-4b2JmgmzatC8OZebV1HLT2sdk9QoKmpFZPez4_pzXXA&oe=62AB38BC" alt="" /> Criminal Case</MenuItem>
            <MenuItem><div><BsChevronCompactDown /></div> Ver mas</MenuItem>
        </Accesos>
    </Container>
  )
}


const Container = styled.div`
    width: 20%;
    color: white;
`
const Menu = styled.div`
    padding-top: 8px;
    padding-left: 8px;
    min-height: 40vh;
`
const Accesos = styled.div`
    min-height: 50vh;
    padding-top: 8px;
    padding-left: 8px;
`

const MenuItem = styled.div`
    height: 6vh;
    padding:0 8px;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 16px;
    border-radius: 5px;
    transition: .2s ease;
    img{
        height: 36px;
    }
    div{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #444546;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    &:hover{
        background-color: #555555;
    }
`
const Profile = styled.div`
    background-image: url('https://scontent.faqp2-3.fna.fbcdn.net/v/t39.30808-1/289834247_5223407884439274_8433120459964383055_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeEyOFfHurUpqFfIEbP1gCDkAcoXamPMHfoByhdqY8wd-nypfJlpfytR-q9sQQi-oYDjgBOBO5xdbpmgPYkWIyB0&_nc_ohc=QtC_mqbMKj4AX-fajER&_nc_oc=AQnljK2FtwDpBRn7XYHDCnCW_ubjEhLxZU1N0UcD3G2C5kIOG0EtEkrxRUpQEBXiaks&_nc_ht=scontent.faqp2-3.fna&oh=00_AT_FOCsZpN3ky6O0kADMtVtuhduB2OiqCsSsTqSn0fcUTw&oe=62D13D94');
    border-radius: 50%;
`

const Separator = styled.hr`
    border:0.3px solid #444546;
    margin: 0 10px;
`