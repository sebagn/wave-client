'use client';
import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Container, Flex, Grid, Stack } from '@mantine/core';

const DashboardLayout: React.FC = ({ children }: any) => {
    return (
        <Flex
            direction={'row'}
            m={0}
            justify={'flex-start'}
            style={{ width: '100%' }}
        >
            <Container px={0} size={250} m={0}>
                <Navbar />
            </Container>
            <Stack mx={0} my={20} w={'100%'}>
                <Container> HEADER </Container>
                {children}
            </Stack>
        </Flex>
    );
};

export default DashboardLayout;
