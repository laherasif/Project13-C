import React from "react"
import '../component/style/index.css'
import { Link  } from 'gatsby'
import LolyTwo from "../component/loly2"
import { navigate } from 'gatsby'
const Home = () => {
    
    return (
        <div className="container-box">
            <div className="loly">
                <div>
                    <h1><i>Vitual Lollypop</i></h1>
                </div>
            <LolyTwo />
            <LolyTwo />
            <LolyTwo />
            <LolyTwo />
            <LolyTwo />

            <div style={{marginTop:'30px'}}>
                <span className="btn" onClick={() => navigate(`/AddLoly`)}>Make a new Loly to send a friend</span>
            </div>

            </div>
           
            

        </div>
    );
}

export default Home