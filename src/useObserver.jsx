import {useState,useEffect} from "react"



export const useObserver=(ref)=>{
    const [isShowing,setIsShowing] = useState(false)


    const toggleAnimate=(e)=>{
      
        if(e[0].isIntersecting){
            console.log("show " + e[0].target)
                setIsShowing(true)
        }
        else{
            console.log("hide " + e[0].target)

            setIsShowing(false)
        }
    
    
    }
    const componentObserver = new IntersectionObserver(toggleAnimate,{threshold:.5});


    useEffect(()=>{
        if(ref.current){componentObserver.observe(ref.current);
        
        }

        // return ()=>componentObserver.unobserve(ref.current)
    },[])

    return isShowing;




}