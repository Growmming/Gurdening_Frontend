import styled from 'styled-components';

const StyledCateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .icon {
    width: 60px;
    height: 60px;
    background-color: #e0e0e0; // 예시 색상입니다. 실제 배경색으로 변경하세요.
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;

    img {
      max-width: 50%;
      max-height: 50%;
    }
  }

  .name {
    font-size: 14px;
    color: #333;
  }
`;

export default StyledCateItem;

// import styled from 'styled-components';

// const CategoryItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   cursor: pointer;

//   .icon {
//     width: 60px;
//     height: 60px;
//     background-color: #e0e0e0; // 예시 색상입니다. 실제 배경색으로 변경하세요.
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 8px;

//     img {
//       max-width: 50%;
//       max-height: 50%;
//     }
//   }

//   .name {
//     font-size: 14px;
//     color: #333;
//   }
// `;

// export default CategoryItem;
