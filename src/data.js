let data = [
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
  
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
  
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
  ] 
  export default data;

//   코드가 길때 활용하는 문법 export / import

// var name  = 'kim'
// export default name;
// name이라는 변수를 뱉어낼수 있는 조건이 됨
// import {name} from './data.js'; 이런식으로 불러올 수 있음
// 파일 하나당 한번밖에 못쓴다
// 내보낼 변수가 많을 때는 {name, name2}이렇게 하면 됨
