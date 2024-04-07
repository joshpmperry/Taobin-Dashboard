"use server";

import { getIronSession } from "iron-session"
import { sessionOptions ,SessionData, defaultSession } from "./session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

let email = "test@taobin.com"
let username = "Taobin"
let id = 1

export const getSession = async ()=>{
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if(!session.isLoggedIn){
        session.isLoggedIn = false;
        session.username = "user";
    }
    return session;
}

export const signup = async (formData: FormData) => {

    const em = formData.get("email") as string
    fetch('http://localhost:5050/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ em }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    redirect("/login")
}


export const login = async (prevState:{error: undefined | string}, formData: FormData)=>{
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    const formEmail = formData.get("email") as string

    // Check user in DB
    // const user = await db.getUser({formEmail, formPassword}) But for this lets just make any password work
    if (formEmail !== email){
        return { error: "Wrong Credentials!" };
    }

    session.userID = id;
    session.email = email;
    session.username = username;
    session.isLoggedIn = true;

    await session.save()
    redirect("/dashboard")
}
export const logout = async ()=>{
    const session = await getSession()
    session.destroy()
    redirect("/login")
}