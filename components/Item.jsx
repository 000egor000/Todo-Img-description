import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const Data = styled.div`
  position: relative;
  background: url('${(props) => props.bgImg}') center/cover no-repeat;
  width: 350px;
  height: 257px;
  margin-bottom: 30px;
  display: flex;
  justify-content: end;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  overflow: hidden;

  :hover {
    transition: 0.5s all ease;
    transform: scale(1.1);
  }
`
const DataTtitle = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 20px;
  background: #fff;
  width: 100%;
  text-align: center;
  color: #3260a1;
  border-radius: 0 0 10px 10px;
  width: 100%;
 
  // word-break: break-all;
  height: 60px;
}

 
`

const Item = ({ data }) => {
  const router = useRouter()

  return (
    <div>
      <Data
        bgImg={data.bgcImg}
        onClick={() => router.push(`/post/${data._id}`)}
      >
        <DataTtitle>
          <span>{data.title}</span>
        </DataTtitle>
      </Data>
    </div>
  )
}

export default Item
