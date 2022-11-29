import React, { useState } from 'react';
import {
  HeaderContainer,
  BlockAddTasks,
  BlockUserProfil,
  ContainerButtonAdd,
  BlockButtonAdd,
  ByttonAdd,
  ButtonIcon,
  ButtonSpan,
  ContainerAddTask,
  BlockAddTask,
  FlexAddTask,
  AddTask,
  AddEvent

} from './Style';

export default function Header() {
  const [addTask, setAddtask] = useState(false);
  const submitHandler = () => setAddtask(!addTask);
  return (
    <>

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
      {addTask ? (
        <ContainerAddTask>
          <BlockAddTask>
            <FlexAddTask>
              <AddTask>Add task</AddTask>
              <AddEvent>Add event</AddEvent>
            </FlexAddTask>
          </BlockAddTask>
        </ContainerAddTask>
      ) : (null)}
    </>

  );
}
