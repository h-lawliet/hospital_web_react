import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    background-color: rgba(255, 255, 255, 0.96);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
    height: 12vh;
    z-index: 999;
    border-bottom: none;

    @media (max-width: 1200px) {
      padding: 0 4vw;
      justify-content: none;
      height: 100px;
    }

    .navbar-logo {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .navbar-menu {
      position: fixed;
      margin: 0;
      padding: 0;
      right: 10vw;
      height: 12vh;
      display: flex;
      flex-direction: row;
    }

    .navbar-item {
      display: flex;
      min-width: 80px;
      cursor: pointer;
      height: 100%;
      margin: 0 1vw;
      align-items: center;
      justify-content: center;
      font-size: calc(17px + 0.1vw);
      font-weight: 500;
      position: relative;
      color: rgb(0, 0, 0);
    }

    .navbar-item > a {
      text-decoration: none;
      color: inherit; 
    }

    .dropdown-menu {
      color: rgb(222, 219, 219);
      font-size: 15px;
      font-weight: 400;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 270%;
      display: none;
      background-color: rgb(44, 43, 43);
      z-index: 998;
    }

    .dropdown-menu li {
      width: calc(100% - 30px);
      line-height: 50px;
      padding: 0 15px;
    }

    .dropdown-menu li:hover {
      background-color: rgb(0, 0, 0);
    }

    .navbar-link {
      text-decoration: none;
      color: inherit;
      width: 100%;
      display: block;
    }

    .navbar-item:hover .dropdown-menu,
    .dropdown-menu:hover {
      display: block;
    }
    .navbar-item:hover {
      color: rgb(0, 0, 0);
      font-weight: 800;
    }

  `

export const StyledHamburger = styled.div`
  position: fixed;
  top: 35px;
  right: calc(4vw + 5px);
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 9999;

  .bar {
    width: 100%;
    height: 4px;
    background-color: #333;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: left center;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
      width: ${({ isOpen }) => (isOpen ? '120%' : '100%')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
      width: ${({ isOpen }) => (isOpen ? '120%' : '100%')};
    }
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
`;

export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: ${({ isOpen }) => ( isOpen ? '-2px 0 5px rgba(0, 0, 0, 0.5)' : 'none' )};
  transition: right 0.3s ease;
  z-index: 1500;
  font-family: "Noto Sans KR", serif;
  font-weight: 600;
  font-size: 16px;
  overflow-y: auto;

  /* WebKit 기반 브라우저 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  -ms-overflow-style: none;

  .sidebar-list {
    list-style-type: none;
    padding-top: 40px;
    padding-left: 0;
    margin: 0;
    margin-top: 60px;
  }

  .sidebar-list li {
    padding: 17px 20px;
    cursor: pointer;
  }

  ul li a {
    text-decoration: none;
    color: #333;
    display: block;
  }
`;

export const Item = styled.div`
  padding: 0 20px;
  line-height: 55px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isSubOpen }) => (isSubOpen ? 'rgb(0, 51, 161);' : 'transparent')};
  color: ${({ isSubOpen }) => (isSubOpen ? 'rgb(255, 255, 255);' : 'rgb(153, 153, 153)')};

  &:hover {
    background-color: rgb(0, 51, 161);
    color: rgb(255, 255, 255);
  }
`;
  
export const SubMenuContainer = styled.div`
  max-height: ${({ isSubOpen }) => (isSubOpen ? '550px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease;
  background-color: rgb(0, 65, 200);
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-size: 14.5px;
`;

export const SubMenuItem = styled.div`
  padding: 0 30px;
  cursor: pointer;
  line-height: 55px;

  &:hover {
    background-color: rgb(0, 51, 161);
    color: rgb(255, 255, 255);
  }
`;

export const SidebarArrow = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid rgb(193, 189, 189);
  border-bottom: 2px solid rgb(193, 189, 189);
  transform: ${({isSubOpen})=>(isSubOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transform-origin: center;
  transition: transform 0.5s ease;
  color: black;
`