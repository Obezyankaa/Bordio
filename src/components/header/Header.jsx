import React, { useState } from 'react';
import {
  HeaderContainer,
  BlockAddTasks,
  BlockUserProfil,
  ContainerButtonAdd,
  BlockButtonAdd,
  ByttonAdd,
  ButtonIcon,
  ButtonSpan

} from './Style';

export default function Header() {
  const [addTask, setAddtask] = useState(false);
  const submitHandler = () => setAddtask(!addTask);
  console.log(addTask);
  return (
    <HeaderContainer>
      <BlockAddTasks>
        <ContainerButtonAdd>
          <BlockButtonAdd>
            <ByttonAdd onClick={submitHandler}>
              <ButtonIcon />
              <ButtonSpan>Add new</ButtonSpan>
            </ByttonAdd>
          </BlockButtonAdd>
        </ContainerButtonAdd>
      </BlockAddTasks>
      <BlockUserProfil>
        BlockUserProfil
      </BlockUserProfil>
    </HeaderContainer>
  );
}
