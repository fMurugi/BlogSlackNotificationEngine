import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Box, Textarea, Button, Flex } from '@mantine/core';
import { IconSend } from '@tabler/icons-react'


export function ChatView() {
  const [message, setMessage] = useState()

  const changeHandler = (event) => {
    console.log(event)
    const msg = event.target.value;
    setMessage(msg);
  }

  const postNotification = async () => {
    const payload = {
      message,
    }
    const response = await fetch('http://localhost:8084/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),

    })
    if (!response.ok) {
      throw Error('Error when trying to send notification')
    }
    return response.json().then(data => {
      return data;
    })
  }

  return (
    <div style={{
      maxWidth: '640px',
      margin: "20px auto"
    }}>
    <Flex direction={"column"} columnGap="md" rowGap={"md"}>
      <Textarea
        onChange={changeHandler}
        placeholder="Your comment"
        radius="md"
        autosize
        minRows={8 }
      />
      <Flex justify={"end"}>

      <Button leftIcon={<IconSend size="1rem" />} onClick={postNotification} variant="white">
        Send notification
      </Button>
      </Flex>
    </Flex>
    </div>
  );
}