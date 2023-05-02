import React from 'react'

import styled from 'styled-components'
import Header from '../../components/Header'
// import profilePic from '../../public/img/Rectangle_4.png'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { deleteRequest } from '../../base/api-request'
const Wraper = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
  padding-top: 35px;
`
const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fefefe;
  border-radius: 15px;
  padding:35px;
  min-height: 450px;
  max-height:100%
  height: 100%;
  margin-top: 50px;
  overflow:hidden;

    word-break: break-all;
  & div{
    display: flex;
    align-items:center;
    justify-content: space-around;
    flex-direction: column;
    width: 50%;

  
    & h3{
      margin-bottom:25px;
      color: #3260A1;
      font-size:24px;
      font-weight:500;
    
     
 
 
   
    }
    & p{
      color: #000000;
      font-size:18px;
      font-weight:300;
      overflow-y: scroll;
      height: 100%;
      max-height:350px
   
  
    }
  };
  & img{
    width: 50%;
    max-height:316px;
    height: 100%;
    padding:25px;
    object-fit: cover;
  }
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  & input {
    padding: 5px 10px;
    position: absolute;
    width: 139px;
    height: 25px;
    text-align: center;
    top: -10px;
    width: 139px;
    height: 25px;
    background: red;
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    border: 0;
    outline: none;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`
const BackButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 10px;
  font-size: 16x;
  font-weight: 600;
  width: 139px;
  height: 25px;
  text-align: center;

  width: 139px;
  height: 25px;
  background: #ffffff;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  border: 0;
  outline: none;
  color: #3260a1;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`

const id = ({ data }) => {
  const { _id, bgcImg, title, text } = data
  const router = useRouter()
  const reset = () => {
    router.push('/')
  }

  const remove = (id) => {
    try {
      deleteRequest(`/api/post/delete/${id}`)
        .then(() => {
          toast.info('Удаленно!')
          reset()
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {}
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <Wraper>
        <div className="container">
          <BackButton onClick={() => router.push('/')}>
            <img src="../../img/icons8.png" />

            <span>Назад</span>
          </BackButton>
          <Down>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <img src={bgcImg} />

            {/* <Image
              src={bgcImg}
              alt={'img' + title}
              width={540}
              height={316}
              // placeholder="blur"
            /> */}
          </Down>
          <Button>
            <input type="button" value="Удалить" onClick={() => remove(_id)} />
          </Button>
        </div>
      </Wraper>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/post/${context.query.id}`)

  const data = await res.json()

  return { props: { data } }
}

export default id
