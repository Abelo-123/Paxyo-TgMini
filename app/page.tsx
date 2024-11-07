"use client";
import '@telegram-apps/telegram-ui/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { AppRoot, List, Section, Cell, Button, IconContainer, Avatar, Text } from '@telegram-apps/telegram-ui';// Adjust as necessary
import React from 'react';

const Telegram = () => {


  return (
    <>

      <AppRoot>
        <div className='w-screen'>
          <div style={{ 'paddingTop': '20px', 'paddingLeft': '20px' }}>
            <div className='flex'>
              <Avatar
                size={48}
                src="https://avatars.githubusercontent.com/u/84640980?v=4"
              />
              <div className='flex flex-col mt-auto ml-3'>
                <Text weight="2">Username</Text>
                <Text weight="3" style={{ 'fontSize': '13px' }}>Balance</Text>
              </div>
            </div>
          </div>
          <Section header="Social Media">
            <div className="gap-x-8 px-6 gap-y-3 place-items-center  w-screen mx-auto h-auto grid grid-cols-3 p-4">
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
              <div className='flex p-1 bg-red-300' style={{ 'borderRadius': '10px' }}>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <div className='my-auto mx-2'>
                  <Text weight="2">Lorem</Text>
                </div>
              </div>
            </div>
          </Section>
          <List
            style={{

              background: 'var(--tgui--section_bg_color)',
              padding: '20px',

            }}
          >

            <Section
              header="Main Settings"
              style={{ 'boxShadow': '2px 2px 5px rgba(0, 0, 0, 0.2)' }}
            >
              <Cell before={<IconContainer>1</IconContainer>}>
                Chat
              </Cell>
              <Cell before={<IconContainer>2</IconContainer>}>
                Data and Storage
              </Cell>
            </Section>
            <Button
              mode="filled"
              size="l"
              style={{ 'width': '90%', 'marginLeft': '5%', 'marginTop': '5%' }}
            >
              Action
            </Button>
          </List>
          <div className='grid mt-16 place-items-center grid-cols-3'>
            <div className='grid place-items-center p-4'>
              <FontAwesomeIcon icon={faCoffee} size="2x" />
              <Text weight="2">Lorem</Text>
            </div>
            <div className='grid place-items-center  p-4'>
              <FontAwesomeIcon icon={faCoffee} size="2x" />
              <Text weight="2">Lorem</Text>
            </div>
            <div className='grid place-items-center  p-4'>
              <FontAwesomeIcon icon={faCoffee} size="2x" />
              <Text weight="2">Lorem</Text>
            </div>
          </div>

        </div>

      </AppRoot >
    </>
  );
};



export default Telegram;