import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Toys-Garden | ${title}`;
    },[title])
}


export default useTitle;