import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 80,
    fontWeight: 200,
    letterSpacing: -1,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
