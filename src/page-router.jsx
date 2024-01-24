import {Route, Routes } from "react-router-dom";

const UserRouter = () => {
    return (
        <>
        <Routes>
        <Route path="/" element = {<h1>기본 유저 페이지</h1>}></Route>
        </Routes>
        </>
    )
}