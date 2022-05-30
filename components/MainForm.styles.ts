import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 80,
    fontWeight: 200,
    letterSpacing: -1,
    fontFamily: 'IBM Plex Sans, sans-serif',

    [theme.fn.smallerThan('md')]: {
      fontSize: 70,
    },
  },
  description: {
    fontSize: 16,
    letterSpacing: 0.5,
    color: theme.colorScheme === 'dark' ? '#7d8190' : '#b2b2b2',
    [theme.fn.smallerThan('md')]: {
      fontSize: 14,
    },
  },
}));
