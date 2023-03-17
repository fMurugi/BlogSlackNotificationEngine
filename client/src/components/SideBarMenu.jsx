import { Menu } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconSettings, IconMessageCircle } from '@tabler/icons-react'

export function SideBarMenu() {
    return (
        <Menu width={200}>
            <Menu.Item icon={<IconSettings size={14} />}><Link to="/">Notifications</Link></Menu.Item>
            <Menu.Item icon={<IconMessageCircle size={14} />}>
                <Link to="/channels">Channels</Link>
            </Menu.Item>
        </Menu>
    )
}