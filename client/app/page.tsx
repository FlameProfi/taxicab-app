'use client'
import { Button } from "@mui/material"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import background from './background.jpg'
import logo from './logo.png'

export default function Home() {
  const { push } = useRouter()
  return (
    <> 
  <div className='center'>
    <Image
        src={background} // Путь к изображению
        alt="BG"
        className='bg'
      />
      <Image
        src={logo} // Путь к изображению
        alt="LOGO"
        width={300}
        height={300}
        style={{zIndex: 999}}
      />
    <h1>Нужна машина в аренду? <br/>
        Мы обеспечим вам комфорт и скорость<br/>
        таксопарк всегда на связи!</h1>
        <div className='buttons'>
        <div onClick={() => push('/auth/register')}>
        <Button variant="contained" color="success" disableElevation>
          Присоедениться
          </Button></div>
          <div onClick={() => push('/auth')}> 
        <Button variant="contained" disableElevation>
          Войти
          </Button></div>
        </div>

  </div>
  <style jsx>
    {`
      .center{
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        position: relative;
      }
        .buttons{
          display: flex;
          gap: 15px;
        }
        h1{
        margin: 5px 0 40px;
        z-index: 999;
        font-family: 'Judson';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;


        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        }
    `}
  </style>
  </>
  );
}
