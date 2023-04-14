import React from "react";
import MyYards from './MyYards';
import HostYardListing from './HostYard';
import UserLogin from './UserLogin.js';
import NewHost from './NewHost';


function Yard ({page, setIsLoggedIn}) {

    function switchPage () {
        if (page === "MyYards") {
            return (
            <MyYards/>

         )
    } else if (page === "HostYard") {
            return (
        <div>
             <HostYardListing/>
        </div>
    )
  } else if (page === "NewHost") {
return (
<div>
 <NewHost/>
</div>
)
}
};
return (
    <div>
        {switchPage()}
    </div>
)
}


export default Yard;