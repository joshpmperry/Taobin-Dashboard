"use server";

import { getIronSession } from "iron-session"
import { sessionOptions ,SessionData, defaultSession } from "./session"
import { cookies } from "next/headers"

export const getSession = async ()=>{
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if(!session.isLoggedIn){
        session.isLoggedIn = true;
        session.username = "user";
    }
    return session;
}
export const login = async ()=>{
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)
    return session;
}
export const logout = async ()=>{
}