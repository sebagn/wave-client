import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    useMantineTheme,
} from '@mantine/core';
import classes from './page.module.css';
import { IconClipboardHeart, IconSchool, IconUser } from '@tabler/icons-react';
import Link from 'next/link';

const mockdata = [
    { title: 'Pacientes', icon: IconSchool, href: '/admin/pacientes' },
    { title: 'Odontologos', icon: IconUser, href: '/admin/odontologos' },
];

export default function AdminPage() {
    const items = mockdata.map((item) => (
        <UnstyledButton
            component={Link}
            href={item.href}
            key={item.title}
            className={classes.item}
        >
            <item.icon size='2rem' />
            <Text size='xs' mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));

    return (
        <Card withBorder radius='md' className={classes.card}>
            <Group justify='space-between'>
                <Text className={classes.title}>Servicios de administrador</Text>
            </Group>
            <SimpleGrid cols={3} mt='md'>
                {items}
            </SimpleGrid>
        </Card>
    );
}
