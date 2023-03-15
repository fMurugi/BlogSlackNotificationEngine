import { Table, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'

export function ChannelList() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        async function fetchChannels() {
            const body = new URLSearchParams()
            body.append('token', process.env.REACT_APP_SLACK_BOT_TOKEN)
            try {
                const response = await fetch(
                    "https://slack.com/api/conversations.list",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: body.toString()
                    }
                );
                const data = await response.json();
                return data.channels
            } catch (error) {
                console.error("Error fetching channels: ", error);
            }
        }

        fetchChannels().then((res) =>  setChannels(res));
    }, []);

    console.log(channels)

    const rows = channels.map((channel) => (
        <tr key={channel.id}>
            <td>{channel.name}</td>
        </tr>
    ));


    return (
        <Box sx={(theme) => ({})}>
            <Link style={{float: 'right'}} to="/settings"> Add channel </Link>
            <Table>
                <thead>
                    <tr>
                        <th>ChannelName</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Box>
    )
}