import { useEffect, useState } from "react"
export const useWindowSize = () =>{
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])
    // use eff?!
    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        // why ?
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return {
        width: size[0],
        height: size[1]
    }
}