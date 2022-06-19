import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { useHistory ,useParams } from 'react-router-dom/cjs/react-router-dom.min';

// styled component
import styled from 'styled-components';
import './Detail.scss';


let 박스 = styled.div`
  padding : 20px;
`;

// let 제목 = styled.h4`
//   font-size: 25px
// `;
// component가 정말 많아질 때 유용
// 단점 - 수십개의 컴포넌트가 생길 수 있다

// 비슷한 ui가 있을 때는? - 변수를 통해서 사용가능
let 제목 = styled.h4`
  font-size: 30px;
  color: ${props =>props.색상};
`;


// 예전 문법
/*
class Detail2 extends React.Component{
  componentDidMount(){
    // detail2가 mount되었을 때 실행할 코드
  }

  componentWillUnmount(){
    // detail2가 unmount되었을 때 실행할 코드
  }

  // 위 두개가 자주 쓰이는 라이프사이클 훅이다
}
*/



function Detail(props){


  // detail 컴포넌트가 나타나자마자 실행
  // 업데이트 될 때도 실행됨 *************

  // 신문법 - 컴포넌트가 업데이트 될때도 실행함

      // 1. ui 보이고 안보이고 상태를 state로 저장
      let [alert,alert변경] = useState(true);
      // ui는 보통 이런식으로 스위치 형태로 나타내게 됨
  
      let [inputData, inputData변경] = useState('');


      
// detail 컴포넌트 등장시,업데이트시 실행할 코드
  useEffect(()=>{
    
    axios.get()



    // 2초 후에 alert창 없어지게 하는 함수 작성
    let 타이머 = setTimeout(()=>{alert변경(false)},2000)

    // return function 어쩌구(){실행코드}
    return()=>{clearTimeout(타이머)}
    // 컴포넌트가 사라질 때 코드를 실행시킴


  },[alert, inputData]); // [alert]는 alert라는 state가 변경될 때만 실행할 수 있게 해줌
  // 이렇게 변수로 저장해서 사용하는 경우가 많음
  // useEffect는 많이 사용해도 상관없고, 위에서부터 순차적으로 적용됨
  // 공백일 경우, detail이 업데이트 되더라도  실행되지 않는다


  // setTimeout 주의점 - return에서 타이머를 지워줘야함

  


    let { id } = useParams();
    // 사용자가 입력한 url파라미터가 다 들어있다고 보면 됨


    // let [shoes,shoes변경] = useState(Data);
    // 이렇게 저장해도 되지만 중요한 data의 경우는 app.js에서만 보관하는 것이 좋다
    // 혹은 redux를 사용하기도 한다.



    let history = useHistory();
    // 방문기록 등을 저장해놓는 history

    // let Number = props.shoes[id].id
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
    })

   


    return(
      <div className="container">
        <박스>
          {/* <제목 색상 = 'red' >Detail</제목> */}
          <제목 className='red' >Detail</제목>
        </박스>

        {/* {inputData}
        <input onChange={(e)=>{ inputData변경(e.target.value) }}/> */}

      {
        // 2. 삼항 연산자를 통해 스위치 형태로 만들어 놓음 (true/false)
        alert === true 
        ? (<div className='my-alert-red'>
            <p>재고가 얼마 남지 않았습니다</p>
          </div>)
        : null
      }
        {/* padding이 20인 박스가 생겼음 */}



          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                 
              <h4 className="pt-5">
              {/* const Number = props.shoes[id].id
              if (Number = i) {
                  {props.shoes[i].title}
              } */}
                </h4>
              {/* 숫자대신 id자리에 있던 숫자를 넣으면 페이지 이동 가능 => 해당변수는 useParams 사용하면 됨 */}
              <h4>{찾은상품.title}</h4>



              <Info 재고 = {props.재고}></Info>


              <h4>
              </h4>
              <p>{props.shoes[0].content}</p>
              <p>{props.shoes[0].price}</p>
              <button className="btn btn-danger" onClick={()=>{ props.재고변경([9,11,12])}}>주문하기</button> 
              {/* 프로그래밍적으로 재고변경하려면 */}
              {/* state 사본 만들고 사본 변경한 후 사본을 변경함수에 집어넣기 */}


              <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
              {/* goback 자리에 push('/')이렇게 쓰면 해당하는 url로 이동한다. */}
            </div>
          </div>
        </div> 
    )
  }



  function Info (props){
    return (
      <p>재고: {props.재고[0]}</p>
    )
  }


  export default Detail;