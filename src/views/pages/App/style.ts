import styled from "styled-components";

export const Container = styled.div`
    width:80%;
    margin: 0 auto;
    
    .content{
        & button {
            background-color: blue;
            border: none;
            border-radius: 15px;
            padding: 10px;
            cursor: pointer;
            transition: 0.3s;
            font-weight: bold;
            color: lightblue;

            &:hover {
                background-color: darkblue;
            }
        }
    }
    `