import { useState, useEffect } from "react";
import Starters from "../Starters";
import Navbar from "../Navbar";  // ✅ Correct relative path
import Maincourse from "../Maincourse";
import Snacks from "../Snacks";
import Deserts from '../Deserts';
import Beverages from '../Beverages';
import Dips from '../Dips';


const Menu = ()=>{


    return(
        <div>
            <Starters/>
            <Maincourse/>
            <Deserts/>
            <Snacks/>
            <Beverages/>
            <Dips/>
        </div>
    )
}

export default Menu;