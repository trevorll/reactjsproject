import { useEffect, useState } from "react";


export default function Data() {


    const [count, setcount] = useState(0)
    const [data, setData] = useState([])
    const url = "http://127.0.0.1:5000/app_admin_s"

    const fetchInfo = async () => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {

                'Authentication': localStorage.getItem('auth_token')
            },
        });
        const d = await res.json();
        console.log(d);
        return setData(JSON.parse(d['jsonresponse']));
    }
    useEffect(() => {
        fetchInfo()
    }, [])

    function hello() {
        setcount(count + 1)
        alert('hello');
    }


    return (
        <div className="App">
            {/* <header className="App-header"></header> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
                {count}
            </p>
            <center className='card col-md-6 mx-auto'>
                <div className='tableFixHead'>
                    <table className='table table-striped' >
                        <thead className='thead-inverse'>
                            <tr>

                                <th key='username'>username</th>
                                <th key='first_name'>first Name</th>
                                <th key='last_name'>last Name</th>
                                <th key='staff_id'>staff id</th>
                                <th></th>


                            </tr>
                        </thead>
                        <tbody>
                            {data.map((dataObj, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td key={dataObj.username}>{dataObj.username}</td>
                                            <td key={dataObj.password}>{dataObj.first_name}</td>
                                            <td key={index + dataObj.last_name}>{dataObj.last_name}</td>
                                            <td key={dataObj.staff_id}>{dataObj.staff_id}</td>
                                            <td> <button>hello</button> </td>
                                        </tr>

                                    </>
                                )
                            }
                            )}
                        </tbody>
                    </table>

                </div>
            </center >
            <button onClick={hello}>
                click me
            </button>
            Learn React



        </div >

    );
}

