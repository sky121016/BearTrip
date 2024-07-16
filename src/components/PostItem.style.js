import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 240px;
    background-color: #fff;
    border-radius: 10px;
    padding: 16px;
    box-sizing: border-box;
`;

export const Top = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    position: relative;
`



export const PostTitle = styled.h3`
    font-size: 18px;
    margin: 0;
    /* margin-bottom: 10px; */
`

export const PostDate = styled.p`
    font-size: 12px;
    margin: 0;
    color: #999;
`

export const Menu = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1.5px solid #ddd;
    cursor: pointer;

    &:hover{
        background-color: #eee;
    }
`


export const Contents = styled.p`
    font-size: 16px;
`

export const Dropdown = styled.div`
    width: 80px;
    background-color: #fff;
    border: 1.5px solid #ddd;
    box-sizing: border-box;
    position: absolute;
    top: 37px;
    right: 0;
    border-radius: 10px;

    ul{
        padding: 0;
        margin:0;
        cursor: pointer;

        li{
            font-size: 14px;
            padding: 10px;
            border-radius: 8px;
            display: flex;
            gap: 6px;
            
            &:hover{
                background-color: #eee;
            }
        }
;
    }
    
`