import {Profile} from "../components/pages/profile/Profile";
import {Users} from "../components/pages/users/Users";
import {Chat} from "../components/pages/chat/Chat";
import {Music} from "../components/pages/music/Music";
import {LoginRegister} from "../components/pages/loginRegister/LoginRegister";


export const authRoutes = [
    {
        path: "/profile",
        Component: Profile
    },
    {
        path: "/users",
        Component: Users
    },
    {
        path: "/chat",
        Component: Chat
    },
    {
        path: "/music",
        Component: Music
    }
];

export const publicRoutes = [
    {
        path: "/login",
        Component: LoginRegister
    },
    {
        path: "/register",
        Component: LoginRegister
    }
];