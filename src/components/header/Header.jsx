/* eslint-disable max-len */
import React, { useState } from 'react';
// В рамках тестового задания для быстроты действий я импортировал все дочерние компоненты хедера сюда, в реальном проекте можно было бы раскидать по папкам и уменьшить кол-во импортов.
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
  AddIcon,
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
                <ButtonSpanKanban>Kanban</ButtonSpanKanban>
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
              <AddTask>
                <AddIcon>
                  <svg data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 1463" width="17" height="17" viewBox="0 0 17 17" fill="#96A2AC">
                    <path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1387" d="M12.885 5.09a.46.46 0 00-.644-.008.071.071 0 01-.01.012l-5.042 5.849-2.431-2.415a.457.457 0 00-.646.647l2.753 2.737a.464.464 0 00.326.134.459.459 0 00.324-.134l5.366-6.171a.453.453 0 00.01-.645z" />
                    <path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1388" d="M8.5 0A8.5 8.5 0 1017 8.5 8.5 8.5 0 008.5 0zm0 16.075A7.575 7.575 0 1116.075 8.5 7.583 7.583 0 018.5 16.075z" />
                  </svg>
                </AddIcon>
                Task
              </AddTask>
              <AddEvent>
                <AddIcon>
                  <svg width="17" height="17" viewBox="0 0 15.561 17.151"><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1478" d="M13.769 1.882h-1.452V.527a.523.523 0 00-.158-.374.54.54 0 00-.382-.153.533.533 0 00-.53.527v1.355h-6.93V.527a.535.535 0 00-1.07 0v1.355H1.776a1.786 1.786 0 00-1.778 1.76v11.75a1.782 1.782 0 001.775 1.759h12.008a1.784 1.784 0 001.777-1.761V3.64a1.789 1.789 0 00-1.789-1.758zm.721 13.508a.72.72 0 01-.722.707H1.783a.715.715 0 01-.715-.706V6.925h13.421zm0-9.521H1.069V3.549a.718.718 0 01.707-.613h1.458l.011.421a.535.535 0 001.07 0l.013-.419h6.9l.012.421a.535.535 0 001.069 0l.014-.419h1.452a.714.714 0 01.713.706z" fill="#96a2ac" /></svg>
                </AddIcon>
                Event
              </AddEvent>
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
