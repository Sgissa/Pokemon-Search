import React from "react";
import { useRouter } from "next/router";
import { Loader, Image, Button, Icon, Label } from 'semantic-ui-react';
import styles from '@/styles/name.module.css';


export default function PokemonName(){
    const [pokemonInfo, setPokemonInfo] = React.useState({ loading: true })
    const router = useRouter();
    const ButtonExampleLabeledBasic = () => (
        <div>
          <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='heart' />
              Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              2,048
            </Label>
          </Button>
          <Button as='div' labelPosition='right'>
            <Button basic color='blue'>
              <Icon name='Dislike' />
              Dislike
            </Button>
            <Label as='a' basic color='blue' pointing='left'>
              2,048
            </Label>
          </Button>
        </div>
      )

    React.useEffect(function(){
        if(pokemonInfo.name !== router.query.name && router.query.name) {
            console.log('Load in Pokemon info', router.query.name)
            fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
            .then(r=> r.json())
            .then(function (r) {
                setPokemonInfo(r);
            })
            .catch((e) =>setPokemonInfo({ loading: false, name: router.query.name }));
        }
    })

    //console.log(router.query);
    return (
        <>
            <h1>Pokemon Name: {router.query.name}</h1>
            <Loader active={pokemonInfo.loading || pokemonInfo.name !== router.query.name}/>
            {
                // if this statment
                pokemonInfo.id 
                //then do this; ture
                ? (  <>
                    <Image className={styles.pic} src={pokemonInfo.sprites.front_default} alt="Description of the image"></Image>
                    <ButtonExampleLabeledBasic/>
                    <h2>Shiny: {router.query.name}</h2>
                    <Image className={styles.pic} src={pokemonInfo.sprites.front_shiny} alt="Description of the image"></Image>
                </>
                //else do this; false
               ) : ( 
               <>
                {isNaN(pokemonInfo.id) ? <h2>Searching for Pokemon</h2> : <h2>Pokemon Not Found</h2>}
                </>
                )
            }
            <ButtonExampleLabeledBasic/>
        </>
    )
}