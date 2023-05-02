import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Item from '../components/Item'
import bgImg from '../public/img/Rectangle_4.png'
import { getRequest } from '../base/api-request'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Wraper = styled.div`
  background: #e5e5e5;
  width: 100wh;
  height: 100vh;
  padding-top: 35px;
`

const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;

  overflow: hidden;
  & span {
    margin: 0 auto;
  }
`

const Index = ({ data }) => {
  return (
    <>
      <Header />
      <Wraper>
        <ToastContainer />
        <div className="container">
          <Down>
            {data.length > 0 ? (
              data.map((el) => {
                return <Item data={el} key={el.id} />
              })
            ) : (
              <span>Нет данных!</span>
            )}
          </Down>
        </div>
      </Wraper>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/post')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Index
