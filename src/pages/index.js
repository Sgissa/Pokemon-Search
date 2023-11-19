import React from "react";
import {} from 'semantic-ui-react';
import { Card, Image, Grid, Button } from 'semantic-ui-react';
import styles from '@/styles/Home.module.css';



export default function Home(){
  return(
    <>
    <Grid>
      <Grid.Row>
        <Grid.Column className={styles.title}>
        <h1>Home</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className={styles.content} columns='2'>
        <Grid.Column width='8'>
        <Card fluid>
    <Image src='/poke-company.jpg' wrapped ui={false} alt="pokemon company"/>
    <Card.Content>
      <Card.Header>Pokemon</Card.Header>
      <Card.Description>
      The Pokémon Company (株式会社ポケモン, Kabushiki Gaisha Pokemon) (TPC) is a Japanese company responsible for brand management, production, publishing, marketing, and licensing of the Pokémon franchise, which consists of video game software, a trading card game, anime television series, films, manga, home entertainment products, merchandise, and other ventures.
      </Card.Description>
    </Card.Content>
    </Card>
        </Grid.Column>
        <Grid.Column className={styles.details}>
          <p>It was established through a joint investment by the three companies holding the copyright of Pokémon: Nintendo, Game Freak, and Creatures. It was founded in April 1998 originally to operate the Pokémon Center stores in Japan before expanding to the entire franchise in October 2000 as it rebranded to its current name. The company is headquartered in the Roppongi Hills Mori Tower in Roppongi, Minato, Tokyo.

          The company has separate subsidiaries that handle operations in different parts of the world, with the Pokémon Company International supporting the territories outside Asia and being responsible for brand management, licensing, marketing, the Pokémon Trading Card Game, TriStar entertainment, and the official Pokémon website on the territories outside Asia.

          Since 2001, The Pokémon Company has handled publication of all Pokémon video games in Japan, while Nintendo handles distribution and worldwide publication. Both companies work together in localization, production, QA, and other aspects. The company is solely responsible for publishing and licensing mobile Pokémon titles, unlike console titles where it has help from Nintendo</p>
          <Button color='yellow' basic> More Info</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  )
}