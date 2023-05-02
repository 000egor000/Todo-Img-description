import React, { useState } from 'react'

import styled from 'styled-components'
import Header from '../components/Header'

import { useRouter } from 'next/router'
import { postRequest } from '../base/api-request'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Wraper = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
  padding-top: 35px;
`
const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Input = styled.input`
  width: 100%;
  background: #ffffff;
  padding: 10px;
  outline: none;
  border: 1px solid #e5e5e5;
`
const Textarea = styled.textarea`
  width: 100%;
  max-width: 440px;
  background: #ffffff;
  padding: 10px;
  outline: none;
  border: 1px solid #e5e5e5;
  min-height: 150px;
`
const Span = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: #222222;
  margin-bottom: 5px;
`

const Form = styled.form`
  width: 500px;

  padding: 30px;
  background-color: #ffffff;
  overflow: hidden;
`

const Label = styled.label`
  display: flex;

  flex-direction: column;
  max-width: 440px;
  width: 100%;
  margin-bottom: 15px;
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
    top: -2px;
    width: 139px;
    height: 25px;
    background: #67bfff;
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

const AddItem = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [bgcImg, setBgcImg] = useState('')
  const params = { title, text, bgcImg }

  const reset = () => {
    setTitle('')
    setText('')
    setBgcImg('')
    router.push('/')
  }
  const addPost = (e) => {
    e.preventDefault()
    try {
      if (!!title && !!text && !!bgcImg) {
        if (title.length <= 25) {
          postRequest('/api/post/add', params)
            .then(() => {
              toast.success('Успешно  добавлено!')
              reset()
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          toast.error(
            `Количество символов превышает !  ${title.length}, должно быть до 25`
          )
        }
      } else {
        toast.error(`Заполните все данные!`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <ToastContainer />
      <Header />
      <Wraper>
        <div className="container">
          <BackButton
            bgImg={'./img/icons8.png'}
            onClick={() => router.push('/')}
          >
            <img src="./img/icons8.png"></img>
            <span>Назад</span>
          </BackButton>
          <Down>
            <Form onSubmit={addPost}>
              <Label>
                <Span>Название статьи:</Span>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Label>
              <Label>
                <Span>Текст статьи:</Span>
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Label>

              <Label>
                <Span>URL картинки:</Span>
                <Input
                  type="text"
                  value={bgcImg}
                  onChange={(e) => setBgcImg(e.target.value)}
                />
              </Label>
              <Button>
                <input type="submit" value="Добавить" />
              </Button>
            </Form>
          </Down>
        </div>
      </Wraper>
    </>
  )
}

export default AddItem
