import styled from 'styled-components'

export const Navmenu = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const Navbutton = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    position: absolute;
    right: 10px;
    top: 26px;
  }
`
