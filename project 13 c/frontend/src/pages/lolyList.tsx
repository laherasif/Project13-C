import React, { useEffect, useState } from 'react'
import '../component/style/list.css'
import Loly from '../component/loly'
import { Link } from 'gatsby'
import { getLollies } from '../graphql/queries'
import { API } from 'aws-amplify'

interface Lolies {
    id: string,
    sender: string,
    reciver: string,
    msg: string,
    color1: string,
    color2: string,
    color3: string,
}

interface incomingData {
    data: {
        getLollies: Lolies[]
    }
}



function lolyList({ location }) {

    const [todoData, setTodoData] = useState<incomingData | null>(null)
    const [Loader, setLoader] = useState(true)


    const id = location.search.slice(4, 14)

    const url = "http://localhost:8000/lolyList?id="

    const fetchLolies = async () => {
        try {
            const data = await API.graphql({
                query: getLollies,
            })
            console.log("data", data);

            setTodoData(data as incomingData)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchLolies()

        setTimeout(() => {
            setLoader(false)
        }, 1500);

    }, [])





    let Result = todoData ? todoData.data.getLollies.filter(item => {
        if (item.id === id) {
            return item

        }

    }
    )
        : null

    console.log("Result", Result)



    if (Loader === true) {

        return <h2>Loading....</h2>

    }


    else
        return (
            <div>
                <h1>Virtual Lollypop</h1>
                <div className="container-list">

                    <div className="main-container">

                        {Result && Result.length > 0 ? Result.map((loly, index: number) => {
                            return (

                                <div className="Loly-container">
                                    <div className="loly" key={index}>
                                        <Loly top={loly.color1} middle={loly.color2} bottom={loly.color3} />

                                    </div>

                                    <div className="form-container">
                                        <div className="link">

                                            <i> <a href={`${url}${loly.id}`} target="_blank">{`${url}${loly.id}`}</a></i>
                                        </div>
                                        <div className="Data">

                                            <h4 >{loly.reciver}</h4>
                                            <p>{loly.msg}</p>
                                            <h4 >__{loly.sender}</h4>
                                        </div>
                                        <h3>{loly.sender} made this virtual lollipop for you. You can <Link to="/AddLoly">make your own </Link>to send to a friend who deserve some sugary treat which won't rot their teeth...

                                         </h3>

                                    </div>
                                </div>
                            )

                        })
                            : null
                        }

                    </div>

                </div>
            </div>
        )
}

export default lolyList
