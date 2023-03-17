import { Table, Box, Loader, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'

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

export function ChannelList() {
    const [channels, setChannels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchChannels().then((res) =>  setChannels(res)).finally(() => setLoading(false));
    }, []);

    if(loading){
        return <Loader variant='dots'/>
    }

    const rows = (channels ?? []).map((channel) => (
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