import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import { Layout } from "./Layout";
import {ChatView} from '../pages/chat'
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><ChatView></ChatView></Layout>,
    },
    {
      path: "/settings",
      element: <ChatView/>,
    },
  ]);
  