import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60%;
  background: #e1ded5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(5px);
  }
`
export const CloseIcon = styled(FaTimes)`
  color: #587fc3;
  box-shadow: 1px 1px 2px black;
`
export const DropdownContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const DropMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  height: 30%;
`
