import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import { IPaste } from "../types";

export function MostRecentPastes():JSX.Element{
    const [pastes, setPastes]= useState<IPaste[]>([]);
    async function loadPastes(){
        try{
            console.log("trying to fetch")
            const response:any = await axios.get(`https://mae-sevgi-pastebin.herokuapp.com/pastes`);
            console.log("this is response.data.body" , response.data.pastebody)
            console.log("this is response.data",response.data);
            const data: IPaste[] = response.data
            setPastes(data);
            const type= typeof response.data
            console.log(type)
        
        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(()=>
    {
        console.log("trying useEffect");
        loadPastes();
        //console.log(pastes)
}, [])

return (
    <>
        {pastes && pastes.map((pastes)=><p key={pastes.id}>{pastes.pastebody}</p>)}
    </>
)
}
