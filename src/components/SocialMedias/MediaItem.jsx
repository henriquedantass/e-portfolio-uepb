import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Item } from './styles';

function MediaItem({
  title,
  children,
  handleOnClick,
  isActive,
  id
}) {
  return (
    <>
    <Item isOpen={isActive} >
      <header onClick={handleOnClick}>
        <FiChevronDown size={25} color={isActive ? 'white' : 'yellow'} />
        <span onClick={handleOnClick} id={id}>{title}</span>
      </header>
      <main  >{children}</main>
    </Item>
    </>
  );
}

export default MediaItem;
