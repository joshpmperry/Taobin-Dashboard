import {SessionOptions} from "iron-session"

export interface SessionData{
    userID?: number;
    email?: string;
    username?: string;
    isLoggedIn: boolean;
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "taobin-session",
    cookieOptions:{
        httpOnly: true,
        secure: process.env.NODE_ENV === "development"
    }
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
}