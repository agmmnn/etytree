/* eslint-disable no-console */
import Image from 'next/image';
// import { useEffect } from 'react';
import { Title, Text, Input, Container, Paper } from '@mantine/core';
import useStyles from './Welcome.styles';

const rand_words = ['amphora', 'ancient', 'galaxy', 'horse', 'microbe', 'planet'];

export function Welcome() {
  const { classes } = useStyles();
  const rand_word = rand_words[Math.floor(Math.random() * rand_words.length)];
  console.log(rand_word);

  return (
    <>
      <Container>
        {/* <Paper shadow="sm" p="sm" withBorder></Paper> */}
        <Title className={classes.title} align="center" mt={20}>
          <Image src={`/assets/${rand_word}.svg`} alt="Landscape picture" width={60} height={60} />
          ety
          <Text inherit variant="gradient" component="span">
            tree
          </Text>
        </Title>
      </Container>
      <br />
      <Container size={300} px={0}>
        <Input placeholder="Horse" radius="xl" size="lg" styles={{ input: {} }} />
        {/* {rand_word[0].toUpperCase() + rand_word.substring(1)} */}
      </Container>
    </>
  );
}
