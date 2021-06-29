
import './App.css';

import React, {useState,useEffect} from 'react';
// import './UseEffectGithubFetchApi.css';

function App() {


    const [users, setusers] = useState([]);

//  getUsers Function ha //

    const getUsers = async() => {
        try{
            const response = await fetch('https://api.covidtracking.com/v1/states/current.json');
            // console.log(response);
            setusers(await response.json());
        }catch (error){
            console.log('My error is ==>',error);
        }
      
    }

    // UseEffect Alag ha //

    useEffect(() => {
     getUsers(); 
    },[])


    return (
        <div>
            {/* <h2 className='heading'>List Of Github Users</h2> */}

<div className="main">
      <h3 className="heading">Covid-19 tracker</h3>
    {
        users.map((val)=>{
            return(
                <div className="containermain" key={val.id}>
                <div className="elements">
                   <h5 className="bg1">State: {val.state} </h5>
                    <h5 className="bg1">Title : {val.death}</h5>
                    <h5 className="bg1">positive : {val.positive}</h5>
                    <h5 className="bg1">totalTestResults : {val.totalTestResults}</h5>
                    <h5 className="bg1">hospitalizedCurrently : {val.hospitalizedCurrently}</h5>
                    <h5 className="bg1">dateModified : {val.dateModified}</h5>
                    <h5 className="bg1">death : {val.death}</h5>
                    <h5 className="bg1">date : {val.date}</h5>
                    {/* <h5>hello</h5> */}
                </div>
            </div>
            )
        })
    }

          
        
</div>
            
           
        </div>
    )
}

export default App;
// export default App;
