'use client';
import { useState } from 'react';
import {
    IconHome,
    IconClipboardList,
    IconMessage,
    IconUser,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Group } from '@mantine/core';

const data = [
    { link: '', label: 'Inicio', icon: IconHome, disable: true },
    {
        link: '/dashboard',
        label: 'Pacientes',
        icon: IconClipboardList,
        disable: false,
    },
    { link: '', label: 'Soporte', icon: IconMessage, disable: true },
    { link: '', label: 'Profile', icon: IconUser, disable: true },
];

export function Navbar() {
    const [active, setActive] = useState('Inicio');

    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={() => {
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify='space-between'>
                    <Image
                        src='/wave.svg'
                        alt='Wave Alineadores Invisibles'
                        width={200}
                        height={125}
                    />
                </Group>
                {links}
            </div>
        </nav>
    );
}
