import { useState, useEffect } from "react"
export default function Clock(){
    const [currentTime, setCurrentTime] = useState(new Date())
    function tick(){
        setCurrentTime(new Date())
    }
    useEffect(()=>{
        let tickInterval = setInterval(tick, 1000)
        function handleUnmount(){
            clearInterval(tickInterval)
            console.log('Cleared Clock update interval')
        }
        return(
            handleUnmount
        )
    },[])
    return(
        <>
        <h1>{currentTime.getHours()} : {currentTime.getMinutes()} : {currentTime.getSeconds()}</h1>
        </>
    )
}