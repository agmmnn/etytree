/* eslint-disable no-console */
import Image from 'next/image';
import { useEffect, useState, forwardRef } from 'react';
import {
  Title,
  Text,
  Input,
  Container,
  Paper,
  Button,
  MultiSelect,
  MultiSelectProps,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
} from '@mantine/core';
import useStyles from './MainForm.styles';
import { GiDiceTwentyFacesOne } from 'react-icons/gi';

const rand_words = ['amphora', 'ancient', 'galaxy', 'horse', 'microbe', 'planet'];

const countriesData = [
  { label: 'English', value: 'EN' },
  { label: 'Ancient Greek', value: 'GR' },
  { label: 'Finland', value: 'FI' },
  { label: 'French', value: 'FR' },
  { label: 'Russian', value: 'RU' },
];

export function Welcome() {
  const { classes } = useStyles();
  const [randWord, setRandWord] = useState('');

  useEffect(() => {
    setRandWord(rand_words[Math.floor(Math.random() * rand_words.length)]);
  }, []);

  console.log(randWord);

  return (
    <>
      <Container
        mt={20}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        <Paper p="sm" style={{ marginTop: '24px' }} /* shadow="md" */>
          <Image src={`/assets/${randWord}.svg`} alt="Landscape picture" width={60} height={60} />
        </Paper>

        <Title className={classes.title}>
          ety
          <Text inherit variant="gradient" component="span">
            tree
          </Text>
        </Title>
      </Container>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <Input
          placeholder={randWord[0] && randWord[0].toUpperCase() + randWord.substring(1)}
          radius="xl"
          size="lg"
          styles={{ input: {} }}
          rightSectionWidth={100}
          rightSection={
            <Button radius="xl" color="dark" size="lg">
              Submit
            </Button>
          }
        />
        <Button radius="xl" size="lg" variant="subtle" color="dark" title="Random Word">
          <GiDiceTwentyFacesOne size={28} />
        </Button>
      </Container>
      <Container
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px',
          maxWidth: '400px',
        }}
      >
        <MultiSelect
          data={countriesData}
          limit={20}
          valueComponent={Value}
          itemComponent={Item}
          radius="xl"
          searchable
          defaultValue={['EN']}
          placeholder="Select a language"
          /*label="Select a language"
        {...props}*/
        />
      </Container>
    </>
  );
}

///////////////////////////////////
function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }`,
          paddingLeft: 10,
          borderRadius: 20,
        })}
      >
        <Box mr={10}></Box>
        <Box sx={{ lineHeight: 1, fontSize: 12 }}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const Item = forwardRef<HTMLDivElement, SelectItemProps>(({ label, value, ...others }, ref) => {
  return (
    <div ref={ref} {...others} style={{ borderRadius: 20 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box mr={10}>lng</Box>
        <div>{label}</div>
      </Box>
    </div>
  );
});
