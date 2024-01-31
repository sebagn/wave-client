'use client' 
import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Container, Grid } from '@mantine/core';

const DashboardLayout: React.FC = ({ children }: any) => {
    return (
        <Container fluid 
        m={0}
        >
            <Grid>
                <Grid.Col span={3}>
                    <Navbar />
                </Grid.Col>
                <Grid.Col span={9}>{children}</Grid.Col>
            </Grid>
        </Container>
    );
};

export default DashboardLayout;
