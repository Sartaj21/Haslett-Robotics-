import syled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const Landing = syled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    ` 
export const LandingPageContainer = syled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    `
export const LandingPageBackground = syled.div()`
    position: absolute;
    background-image: url('https://scontent.fdet1-2.fna.fbcdn.net/v/t39.30808-6/274933057_283188093939229_1763641908226979116_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=19026a&_nc_ohc=GHTM0ImNkh8AX8MAMrz&_nc_oc=AQlr_WhkQ2zIzcwspCkysyHEc22QIqmi9K8t4_sOVctf8e6UobMKOJ924EO5vOt_5MawLJVjBIyx3l-LMzSj7-qY&_nc_ht=scontent.fdet1-2.fna&oh=00_AT_ENsuXw1drBB4JCVSyQ5WWLCQ06WawNTHvVLQfyIDGqQ&oe=62992CFB');
    width: 100%;
    height: 100%;
    `

