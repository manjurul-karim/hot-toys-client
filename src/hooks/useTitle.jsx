import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Hot-Toys | ${title}`;
    },[title])
}


export default useTitle;