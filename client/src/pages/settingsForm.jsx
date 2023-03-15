import React, { useState } from "react";
import {Textarea, TextInput, Checkbox, Box, Group, Button} from "@mantine/core";
import {useForm} from '@mantine/form'
import {useNavigate} from 'react-router'

/** manage/configure the name, purpose and topics of a channel */

const defaultInitialValues = {
  name: undefined,
  topic: undefined,
  purpose: undefined,
  isPrivate: undefined
}

// export function getInitialValues(channelObj) {
//   if (!channelObj) return defaultInitialValues;
//   return {
//     name: channelObj.name,
//     topic: channelObj.topic.value,
//     purpose: channelObj.purpose.value,
//     isPrivate: channelObj.is_private
//   }
// }

export function SettingsForm() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: defaultInitialValues,
  });

  const handleSubmit = (values) => {

    const body = new URLSearchParams();
    body.append("token", process.env.REACT_APP_SLACK_BOT_TOKEN)
    const {name, topic, purpose, isPrivate} = values;
    if (name) body.append("name", name);
    if (topic) body.append("topic", topic);
    if (purpose) body.append("purpose", purpose);
    if (isPrivate) body.append("is_private", isPrivate);

    const urlEncodedBody = body.toString()

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncodedBody,
    };

    return fetch("https://slack.com/api/conversations.create", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return <Box maw={300} mx="auto">
    <form onSubmit={form.onSubmit((values) => handleSubmit(values).then(navigate('/channels')))}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="channelname"
        {...form.getInputProps('name')}
      />

      <Textarea
        label="Purpose"
        placeholder="Purpose of the channel"
        {...form.getInputProps('purpose')}
      />

      <Textarea
        label="Topic"
        placeholder="Topic of the channel"
        {...form.getInputProps('topic')}
      />

      <Checkbox
        mt="md"
        label="Private"
        {...form.getInputProps('isPrivate', { type: 'checkbox' })}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  </Box>
}
