import React from 'react';
import 'semantic-ui-css/semantic.css';
import '@/styles/globals.css';
import { Menu, Input, Button } from 'semantic-ui-react';
import Link from 'next/link';
import styles from '@/styles/App.module.css';

export default function App({ Component, pageProps }) {
  const [pokemonSearch, setPokemonSearch] = React.useState('');

  function updateSearch(e, { value }) {
    setPokemonSearch(value);
  }

  return (
  <>
  <Menu>
  <Menu.Item className={styles.homeNav} as={Link} href='/'>Home</Menu.Item>
  <Menu.Item className={styles.bar}>
    <Input name= 'pokemonSearch' onChange={updateSearch} value={pokemonSearch}/>
    <Button as={Link} href={`/pokemon/${pokemonSearch}`}>Search</Button>
  </Menu.Item>
  </Menu>
  <Component {...pageProps} />
  
  </>
  
  );

}
