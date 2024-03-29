import React from 'react';
import { Container, VStack } from '@/components/ui';

const meta = {
  title: 'LAYOUT / Container',
  component: Container,
  argTypes: {
    centerContent: {
      control: { type: 'string' },
      description:
        'To center content in a container, use the centerContent prop. It sets the flexDirection to column and alignItems to center, even if the content is narrower than the container.',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <VStack>
        <Container width="breakpoint-sm" bg="accent.2" color="accent.text">
          sm Container
        </Container>
        <Container width="breakpoint-md" bg="accent.3" color="accent.text">
          md Container
        </Container>
        <Container width="breakpoint-lg" bg="accent.4" color="accent.text">
          lg Container
        </Container>
      </VStack>
    );
  },
};
