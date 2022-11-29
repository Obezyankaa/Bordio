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
  ButtonFilter,
  ContainerFilterMenu,
  FilterMenu,
  FlexFilterMenu,
  OneFilterTask,
  FormSearchProfil,
  FormInput,
  FormButton,
  UserProfilIcon,
  UserAvatar
} from './Style';

export default function Header() {
  const [addTask, setAddtask] = useState(false);
  const [open, setOpen] = useState(false);
  const [filterbtn, setFilterbtn] = useState(false);
  const submitHandler = () => setAddtask(!addTask);
  const submitHandlerTwo = () => setOpen(!open);
  const submitHandlerThree = () => setFilterbtn(!filterbtn);

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
              <ButtonFilter onClick={submitHandlerThree}>
                <ButtonSpanFilter>Filter</ButtonSpanFilter>
                <ButtonIconFilter />
              </ButtonFilter>
            </BlockButtonFilter>
          </ContainerFilter>
        </BlockAddTasks>
        <BlockUserProfil>
          <FormSearchProfil>
            <FormInput placeholder="Search..." />
            <FormButton />
          </FormSearchProfil>
          <UserProfilIcon />
          <UserAvatar />
        </BlockUserProfil>
      </HeaderContainer>
      {addTask ? (
        <ContainerAddTask>
          <BlockAddTask>
            <FlexAddTask>
              <AddTask>Еask</AddTask>
              <AddEvent>Event</AddEvent>
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
      {filterbtn ? (
        <ContainerFilterMenu>
          <FilterMenu>
            <FlexFilterMenu>
              <OneFilterTask>2022</OneFilterTask>
              <OneFilterTask>2023</OneFilterTask>
              <OneFilterTask>2024</OneFilterTask>
            </FlexFilterMenu>
          </FilterMenu>
        </ContainerFilterMenu>
      ) : (null)}
    </>

  );
}
