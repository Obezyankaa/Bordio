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
  AddEvent,
  ContainerKanban,
  BlockButtonKanban,
  ButtonKanban,
  ButtonSpanKanban,
  ButtonIconKanban,
  ContainerMenuKanban,
  BlockMenu,
  FlexMenu,
  OneTask,
  //   TwoTask,
  ContainerFilter,
  BlockButtonFilter,
  ButtonSpanFilter,
  ButtonIconFilter,
  ButtonFilter

} from './Style';

export default function Header() {
  const [addTask, setAddtask] = useState(false);
  const [open, setOpen] = useState(false);
  const submitHandler = () => setAddtask(!addTask);
  const submitHandlerTwo = () => setOpen(!open);

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
          <ContainerKanban>
            <BlockButtonKanban>
              <ButtonKanban onClick={submitHandlerTwo}>
                <ButtonSpanKanban>Kaban</ButtonSpanKanban>
                <ButtonIconKanban />
              </ButtonKanban>
            </BlockButtonKanban>
          </ContainerKanban>
          <ContainerFilter>
            <BlockButtonFilter>
              <ButtonFilter>
                <ButtonSpanFilter>Filter</ButtonSpanFilter>
                <ButtonIconFilter />
              </ButtonFilter>
            </BlockButtonFilter>
          </ContainerFilter>
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
      {open ? (
        <ContainerMenuKanban>
          <BlockMenu>
            <FlexMenu>
              <OneTask>Board view</OneTask>
              <OneTask>Table view</OneTask>
              <OneTask>Kanban</OneTask>
            </FlexMenu>
          </BlockMenu>
        </ContainerMenuKanban>
      ) : (null)}
    </>

  );
}
