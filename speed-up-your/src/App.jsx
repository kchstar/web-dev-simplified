import Store from "./components/Store"
import { About } from "./components/About"
import React from 'react'

function App(){
    return(
        <Routes>
            <Route path="/" element = {<NavWrapper />}>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store/>} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}
function NavWrapper(){
    return(
        <>
            <nav style={{display:"flex", gap:"1rem"}}>
                <Link to="/">Home</Link>               
                <Link to="/store">Store</Link>
                <Link to="/about">About</Link> 
            </nav>
            <Outlet />
        </>
    )
}