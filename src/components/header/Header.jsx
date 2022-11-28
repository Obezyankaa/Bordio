import React from 'react';
import { HeaderContainer, BlockAddTasks, BlockUserProfil } from './Style';

export default function Header() {
  return (
    <HeaderContainer>
      <BlockAddTasks />
      <BlockUserProfil />
    </HeaderContainer>
  );
}
