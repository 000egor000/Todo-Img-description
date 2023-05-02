import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const Header = () => {
  const Nav = styled.div`
    padding: 10px 0;
    & a {
      text-decoration: none;
      color: #3260a1;
      font-size: 18px;
      font-weight: 500;
    }
  `

  const Up = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    & a {
      padding: 5px 10px;
      position: absolute;
      width: 139px;
      height: 25px;
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

  return (
    <Nav>
      <div className="container">
        <Link href="/" as={'/'}>
          NEXT | BLOG
        </Link>
        <Up>
          <Link href="/add_Item" as={'/add_Item'}>
            Добавить статью
          </Link>
        </Up>
      </div>
    </Nav>
  )
}

export default Header
