import { useState } from "react"

export function AddNewPaste():JSX.Element{
    const [titleInput, setTitleInput]= useState<string>("");
    const [bodyInput, setBodyInput]= useState<string>("");
    return(
        <>
            <input type="text" placeholder="title (optional)" value={titleInput}></input>
            <input type="text" placeholder="type paste here..." value={bodyInput}></input>
            <button>Submit</button>
        </>
    )

}