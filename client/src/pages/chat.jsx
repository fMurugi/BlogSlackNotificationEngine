import {useState} from 'react';
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Box, Textarea, Button } from '@mantine/core';
// import {Send} from '@tabler/core'

// interface FormValues {
//   email: string;
//   terms: boolean;
// }


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
    if(!response.ok){
      throw Error('Error when trying to send notification')
    }
    return response.json().then(data => {
      return data;
    })
  }

  return (
    <Box maw={320} mx="auto">
          <Textarea
          onChange={changeHandler}
      placeholder="Your comment"
      radius="md"
    />
    <Button onClick={postNotification}  variant="white">
      Send notification
    </Button>
    </Box>
  );
}