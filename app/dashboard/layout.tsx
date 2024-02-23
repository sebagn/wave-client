'use server';
import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Avatar, Container, Flex, Group, Stack } from '@mantine/core';

const DashboardLayout: React.FC = ({ children }: any) => {
    return (
        <Flex direction={'row'} m={0} style={{ width: '100%' }}>
            <Container px={0} size={250} m={0}>
                <Navbar />
            </Container>
            <Stack w={'100%'} p={25} align='center'>
                <Group
                    w={'100%'}
                    justify='flex-end'
                    pb={20}
                    style={{ borderBottom: 'solid 1px #f0f0f0' }}
                >
                    <p>Sebastian Garcia Nallar</p>
                    <Avatar alt="it's me" size={'lg'}>
                        {' '}
                        SGN{' '}
                    </Avatar>
                </Group>
                {children}
            </Stack>
        </Flex>
    );
};

export default DashboardLayout;
