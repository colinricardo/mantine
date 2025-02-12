import React from 'react';
import { IconStar } from '@tabler/icons';
import { MantineDemo } from '@mantine/ds';
import { Avatar, Group } from '@mantine/core';

const code = `
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size={24} />
      </Avatar>
    </>
  );
}

`;

function Demo() {
  return (
    <Group position="center">
      <Group position="center">
        <Avatar src={null} alt="no image here" />
        <Avatar src={null} alt="no image here" color="indigo" />
        <Avatar src={null} alt="no image here" color="red">
          VR
        </Avatar>
        <Avatar color="blue" radius="xl">
          <IconStar size={24} />
        </Avatar>
      </Group>
    </Group>
  );
}

export const placeholders: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
