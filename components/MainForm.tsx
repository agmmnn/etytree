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
import axios from 'axios';
import { saveAsPng } from 'save-html-as-image';

import { GiDiceTwentyFacesOne } from 'react-icons/gi';
import { BsImage } from 'react-icons/bs';
import { DataEty } from '../components/DataEty';

const svglist = ['amphora', 'ancient', 'galaxy', 'horse', 'microbe', 'planet', 'diamond'];

const countriesData = [
  { label: 'English', value: 'EN' },
  { label: 'Ancient Greek', value: 'GR' },
  { label: 'Finland', value: 'FI' },
  { label: 'French', value: 'FR' },
  { label: 'Russian', value: 'RU' },
];

export function MainForm() {
  const { classes } = useStyles();
  const [word, setWord] = useState('');
  const [wordId, setWordId] = useState(0);
  const [randWord, setRandWord] = useState('');

  useEffect(() => {
    setRandWord(svglist[Math.floor(Math.random() * svglist.length)]);
    console.log(randWord);
  }, []);

  const getdata = () => {
    axios
      .get(`https://api.etymologyexplorer.com/prod/autocomplete?word=${word}&language=English`)
      .then((response) => {
        console.log(response.data.auto_complete_data[0].word);
      })
      .catch((error) => console.log(error));
  };
  const getrandom = () => {
    axios
      .get(`https://api.etymologyexplorer.com/prod/random_etymology?language=English`)
      .then((response) => {
        console.log(response.data.word, response.data.id);
        setWordId(response.data.id);
      })
      .catch((error) => console.log(error));
  };
  const saveAsImage = () => {
    saveAsPng(document.querySelector("svg[id*='ref']"), {
      filename: 'etytree',
      printDate: true,
    });
  };

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
          <Text className={classes.description}>Visualize Etmological Relaitons</Text>
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
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && word) {
              getdata();
            }
          }}
          placeholder={randWord[0] && randWord}
          radius="xl"
          size="lg"
          // styles={{ input: {} }}
          // rightSectionWidth={100}
          // rightSection={
          //   <Button radius="xl" color="cyan" size="lg">
          //     Search
          //   </Button>
          // }
        />
        <Button
          radius="xl"
          size="lg"
          variant="outline"
          color="cyan"
          title="Random Word"
          onClick={getrandom}
        >
          <GiDiceTwentyFacesOne size={28} />
        </Button>
        <Button
          radius="xl"
          size="xs"
          variant="outline"
          color="cyan"
          title="Save As Image"
          onClick={saveAsImage}
        >
          <BsImage size={16} />
        </Button>
      </Container>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '5px',
          maxWidth: '450px',
        }}
      >
        {/* <MultiSelect
          data={countriesData}
          limit={20}
          valueComponent={Value}
          itemComponent={Item}
          radius="xl"
          searchable
          defaultValue={['EN']}
          placeholder="Select a language"
          label="Select a language"
        {...props}
        /> */}
      </Container>
      <DataEty wordId={wordId} />
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
