import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import { Layout } from "./Layout";
import {ChatView} from '../pages/chat'
import { SettingsForm } from "../pages/settingsForm";
import {ChannelList} from "../pages/ChannelList";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><ChatView></ChatView></Layout>,
    },
    {
      path: "/settings",
      element:<Layout><SettingsForm></SettingsForm></Layout>,
    },
    {
      path: "/channels",
      element:<Layout><ChannelList></ChannelList></Layout>,
    },
  ]);
  