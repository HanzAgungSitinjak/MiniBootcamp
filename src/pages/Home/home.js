import React from 'react';
import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import './App.css';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container>
        <div div className={classes.inner}>
            <div className={classes.content}>
            <Title className={classes.title}>
            <span className={classes.highlight}>Selamat</span> Datang <br /> di TokoKami
            </Title>
            <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>
          <List mt={30} spacing="sm" size="sm">
            <List.Item icon={<CheckIcon />}>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item icon={<CheckIcon />}>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item icon={<CheckIcon />}>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>
          <Group mt={30}>
          <Link to='./src/pages/ProductList/index'>
              <Button radius="xl" size="md" className={classes.control}>
                Telusuri Toko
              </Button>
            </Link>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Hubungi Kami
            </Button>
          </Group>
            </div>
        </div>
    </Container>    
  );
}
const CheckIcon = () => (
  <ThemeIcon size={20} radius="xl">
    <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
  </ThemeIcon>
);
export default App;
