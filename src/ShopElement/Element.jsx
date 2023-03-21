import React, {useEffect, useState} from "react";
import S from './Element.module.css'
import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {incrementNotificationCount} from "../redux/HeaderReducer";
import ShowImage from "../components/MainContent/auth/Items/CreateItem/ShowImage/ShowImage";
import {addItemToBuy, addItemToCompare} from "../redux/UserReducer";


const Element = (props) => {
    const [isHover, setIsHover] = useState(false)
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const [message,setMessage]=useState('')

    useEffect(() => {
        setCount(props.notificationCount)
    }, [props.notificationCount]);

    const handleButtonClick = () => {
        dispatch(incrementNotificationCount(count + 1));

        setCount(count + 1)
        dispatch(addItemToBuy(props.data))
    };
   const handleAddToCompare=()=>{
       dispatch(addItemToCompare(props.data))
    }
    const handleAddToWishList=()=>{
        {props.isAuth? props.addItemToWishList(props.data):setMessage('To add item you should be authorized')}
    }

    return <div className={S.element} onMouseLeave={() => setIsHover(false)} onMouseEnter={() => {
        setIsHover(true)
    }} className={S.element}>
        <div>
            <ShowImage  image={props.data.image}/>
        </div>
        <div>{props.data.fullName}</div>
        <div>Price:{props.data.price}</div>
        <div>
            <Button onClick={handleButtonClick} style={{position: 'relative', zIndex: 1}} variant="outlined"
                    color="primary">Buy</Button>
        </div>
        <div>
            <img  onClick={handleAddToCompare} className={S.ImageCompare} src={'https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-simply-weight-icon-compare-logo-symbol-scales-judgment-pictogram-ui-comparison-png-image_1875848.jpg'}/>
        </div>
        <div>
            {message}
            <img onClick={handleAddToWishList} className={S.ImageCompare} src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8NDxAPEA8QEBAQDw8PFhAPDw8PFRUXFhURFRUYHSggGBolGxUVITEhJSkuLi4uFx8zODUsNygtLi0BCgoKDg0OFQ8PFy0eHR0tLS03LS0rLS4tLy0tLS0tLS0tLS0tLi0rLS0tLS4tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAAAQcCBQYDBP/EAD0QAAIBAgIHAwgJAwUAAAAAAAABAgMRBBIFBhMhMVGRIkFxFjRUYXKys9EUJDI1UoGDktIjoeEHFTOisf/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgUGAwT/xAA0EQEAAQICBgkDAwUBAAAAAAAAAQIRAwQFEiGBsdEVMTRBUVNhkaFxwfATIjIkUpKy8RT/2gAMAwEAAhEDEQA/ANxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfnrY+jB5Z1aUHylOEX0bJMxC2ZnpzWbFRxNdU8RKFNVZRppNZXFOyced7X/ADMNaJ73L57MZ2jGr1NaKY9NnB+Nay430mp/b5GT4Oks15k/Dn5T430mp/1+QOk815nDkeU+O9IqdIfIHSea8zhyPKfHekT6Q+QOk815nxHJfKfG+k1OkPkF6TzXmfEcjynxvpM+kPkF6TzXmfEcl8qMd6RPpD5A6UzXmfEcnLypx3pEulP+JV6TzXmfEcnJa0470iX7aX8QvSma8z4jkq1rx3pD/ZR/iDpTN+Z8RycvKvHekP8AZR/iF6UzX9/xHI8rMd6Q/wBlH+AOlM1/f8U8npdUdZqlep9HrtSk03CaSi21vaaW7hd7rcCtto3SNeNX+ni7Z7pevDdgAAAAAAAAAAAAAAHmKujaeaWzxFRrPPdD6bVUZOTck1SqqCaba+yrWseWrF+viyuzHTVCH0mttJqco4meVybzZlN5bptyT9TdyRFN3L57FzcV40Uxeib32ROz7B6NAAUAAQFuFVBS5RQqgW4LiA77Up/XqH6vw5lbLRU/1VG/hLUQ7AAAAAAAAAAAAAAAA83iNG4NzqTjtHKdSTqSp0Vir1L2d5ypTaae6191rbjzmmlleWXaZhSWJrRnLM1iamz2j7SanLJ2d2V27rLwMY1buWzs5zXxtWf2bb7YnZxgPRoQCgACAoUAFFCqgKAuB3upfn+H/V+FMrY6K7Xh7/8AWWph2QAAAAAAAAAAAAAAB5XF0dHSq1IvLtXNurB0qVSTm3vb2sG+jty3HlMUXZbWaaZ2VPE1YNq30mcaSaSs88siUUrR3dyStYxp1b9Xw5fPUZya8aaav2bb/ujq+l7h6tAAAKgAFChQAoVUBQCKO71N8/w/jP4cw2Oi+14e/hLVQ7IAAAAAAAAAAAAAAA8visZoyNWpCTVOrnltI7SWGbnffLK5Rvd964nlNVETbvZWlmmmJ0o4mtxlGWIqKm3mnudR5O1Lj3b1fxMYqov6uYz2Wzk1YtcVTqRebXnq+jiernwABQAACoqqACqgAFRR3Wp7+vYf2p+5INjoztWHv4S1YOyAAAAAAAAAAAAAAAPM/wC6YPaVY06FbMqklUlQWSMql3mblCSTd737zz1o7mVpZhpitThia259vFVbOzlJOVWWVSb713sxiuL2s5XO5DHmvGxYqjVi8229XtZD0aJQAACgLgW5VAKFAFyggO71Nf1/D+M/hzDYaL7Xh7+EtXDswAAAAAAAAAAAAAADymP1gwO0nCWGVapCTjPIsHVldc1tLr8zynEpva1/ZlqyzPSWJpqvVyR7M8RVtGFr01OpLLGSXCydn3KxIr7rOUzuj6qq8bF14tF5ttv9FPRowCgAOUZWaa4p3XfvCxVMTEx3Pt9MndO63Ky7MeG71epE1Ye//qxbxN+r0j05OUMbNWSy7lZdmHK3IasLTm8WItFvaOT4Sm223xbbfdvZk8Kqpqmap70uELgLlLlgrutTvP8ADe1L3JBsNGdqw9/CWsh2YAAAAAAAAAAAAAAB5rSmscqVSVN4OrUim1myYjK/Xd0svRtHnNdptbjyZRDLdJYtOvVcacv6mIqNpZWqanUk7dlvcr+rh3GMVT4OTzuSoqxMbE/UiJi822e38r/Cno0gAAAUABUyiAW4UAtyhcDutTvP8P7UvckGx0X2vD38JayHZgAAAAAAAAAAAAAAHm9J6xYmjUlCGBnWipNKUfpe9c92Ha/uzyqrqidkceTKIjxZZpLFSlXqzUJXniKkqkWpRdJzqSck8yT7LbXDu4IkVT4OTzuUwZxMXEnGi+2bevh1/ZT0aQAgFAoAAUAAUApQQHdam+f4b2p+5INhovteHv4S1oO0AAAAAAAAAAAAAAAPP6S0rjKdSUaeGU4JtKVqsrrn2UYTNXdDKIhlGkcROVeq1TtKWIquorz7DlUk5fajHg77uJhE1X6nJ53Ay0141U4lqtuz18OqA9GlAgAAoAClEAoUApRAO81M+8MN41PhyDY6K7Xh7+EtZDswAAAAAAAAAAAAAADz2O0lj4zlGng5zipNRlahaUb7n/z36peB5TVXfZTw5srR4so0lVqyr1WoRTeIqOqm3eLdSWdLcuG/n4slM1X2x+e7lM7h5PXxZmudfbaPX/H7qejRgAABQABFACgAoUAO81M8/wAP7U/hyDYaK7Xh7+EtZDtAAAAAAAAAAAAAAADpcZLH3lstllu8vYUna+7jViYTrdzLYyHSEqjrVLLtbeptbpRTe0lnsk3337/zZ50699rlM7GS18W8zr7fHr9lPVowCEUApUAKUAAAKpQA7rU5/X8N7UvckGw0X2vD38Ja2HaAAAAAAAAAAAAAAAHTVsPjnKTjUio5nlWenujfdu+jv/1+Jhaq/wCcmWxkGkto69WzirYirtHb7dqss/e/X3LwR5xFV/zk5TO15OK8WJpma9v0v/l9g9GkAAAChAoACgBQAAqu61O8/wAN7UvckH36L7Xh7+EtcDtQAAAAAAAAAAAAAADp8RgMU5SccTZNtpWasr8O8xtPit4Y7pCE3WqWlbLXqZnvee1R5uu88oiq/X+ezlc5i5WK8WmaL1bdu3r8f5fZyPRpACAEBQAAoAUoBFAAd3qX5/hvan7kitjorteHv4S1sO0AAAAAAAAAAAAAAAOjxOhKs5SksTOKbbspYzdv4bq6XRGE0evHmyuyDHUpOrNKTjkr1E97bnlqO97799nxb4955xTPi5POZnAivFo/S/dN4vfv8epyPRpQAQABRQBQAAUoBAK73Uj7ww/jU+HMNhonteHv4S1ortAAAAAAAAAAAAAAADzGO1QVWpOrt2s85TalCLtd3ssrireKZ5zh372WsyjFYd7SUVJpU600rZVmyVHe+VLjb18TCKZ8fz3cnnM3h014tH6d5m8X2e/8b/L6GbTKEQKAAKVAABSgUUCAd7qR94YfxqfCmGx0V2vD38Ja2V2YAAAAAAAAAAAAAAB47SGrNGVSUpY+cG5NuMnSm1fu/qXPKaL97KKvRl9fDqU32naFWWVrKs2Sb37klvt3LvMKaLd7lM3nYprxcOnDjbeL7L/XZEPsejSqBAKAAACihAooAoAd7qN944f9X4Uw2Oie14e/hLWyuzAAAAAAAAAAAAA4ynYD5usB5XEaI0e6tSTxEoTc5OcYVYRtNvemktzv+Z5zRTdlrSyzEUoTm25NpVZOHacr5KnZ3ybfcuHM84oiJ/45XNZ7F18XDpp2TeJ/lOz3t8P0GbShUAAACgCgAKKgilEIO+1G+8cP+r8KZWy0T2ujfwlrZXZAAAAAAAAAAAAAcJ07gfkrYWXcwPOYzVqm5yq7K85ScpS+03J9/auYTh03vZlrSy/GUGqs4VoShKNVuMZ54tZZ3i1m323J/wCDyimKZcxns3j01V0WtE3jv6p+svpmXNGd4aO0mZc0LpaTMuaF4LSudc0LwWkzrmhctJmXNFuWkzrmhctJnXNdUW5afAzrmuouWlc65rqLmrJtFzXVFvBqz4G0XNdULwas+D1f+n+Bk8VHEyvGnTjLK3wnKUXGy57m3+SK3Wh8pXOLGNMWiPm+xqBXUAAAAAAAAAAAAAAAACNJ8QOOyj+GPRANjH8MeiAbKP4Y9EA2Ufwx6IC7OPJdEAyLkgGRcl0AuVckAyrkgJlXJANmuS6IBs48l0QDKuSA5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k='}/>
        </div>
        {isHover && <div>
            <div>Description:{props.data.description}</div>
            {props.data.characteristics.map(i=><div>{i.featureName}:{i.featureDescription}</div>)}
            <div>
            </div>
        </div>}

    </div>
}

export default Element;