import React, { useState, useEffect } from 'react';
import { Title, Text, Input, Container, Paper } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export function DataEty() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.etymologyexplorer.com/prod/get_trees?ids[]=1315')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    data[1] && Object.keys(data[1].words).map((wd) => console.log(data[1].words[wd].word));
  }, [data]);

  return (
    <>
      {data[1] &&
        Object.keys(data[1].words).map((wd) => {
          return (
            <Paper shadow="sm" p="xs" withBorder key={uuidv4()}>
              {data[1].words[wd].word}
            </Paper>
          );
        })}
    </>
  );
}
