import React, { useEffect, useState } from 'react'
import './Style.css'

const getLocalData = () => {
    const lits = localStorage.getItem("Data-Todo")
    if (lits) {
        return JSON.parse(lits)
    }
    else {
        return [];
    }
};

function TodoList() {
    const [items, setItems] = useState("");
    const [data, setData] = useState(getLocalData());
    const [inputdata, setInputdata] = useState([])
    const [togglebtn, setTogglebtn] = useState(false)
    const addData = () => {
        if (!items) {
            alert('fill the text')
        } else if(items && togglebtn){
           setData(
            data.map((curlElem)=>{
                if(curlElem.id === inputdata){
                   return{...curlElem, name:items}
                  setItems('')
                }
                return curlElem;

            })
           )
        }
         else {
            const newdata = {
                id: new Date().getTime().toString(),
                name: items
            }

            setData([...data, newdata])
            console.log(data)
            // console.log(items)
            setItems('')
        }
    };
    const editeData = (index) => {
        const edit_data_item = data.find((curlElem) => {
            return curlElem.id == index
        })
        setItems(edit_data_item.name);
        setInputdata(index);
        setTogglebtn(true);
    }
    const itemDelete = (index) => {
        const deletedata = data.filter((curlElem) => {
            return curlElem.id != index
        })
        setData(deletedata)
    }
    const check = () => {
        setData([])
    }

    useEffect(() => {
        localStorage.setItem("Data-Todo", JSON.stringify(data))
    }, [data])

    return (
        <div>
            <div className='bg-gray-800 '>
                <div>
                    <figure className='flex justify-center p-3  '>
                        <img src="/images/todo1.png" alt="TODO" width={80} className='text-center' />
                    </figure>
                </div>
                <div className=''>
                    <div className='w-full p-2   items-center '>
                        <input type="text" name="" id="" value={items} placeholder='✍text...' className='w-96 p-3 rounded-3xl' onChange={(e) => setItems(e.target.value)} />
                        {togglebtn ? <button onClick={addData}><i className="far fa-edit btn" aria-hidden="true"></i></button> : <button onClick={addData}><i className="fa fa-plus btn" aria-hidden="true"></i></button>}
                        <button onClick={addData}><i className="fa fa-plus btn" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className='my-5 flex  justify-center items-center flex-col  gap-3'>

                    {
                        data.map((curlElem) => {
                            return (
                                <div className=' bg-blue-800 p-3  items flex justify-between rounded-3xl' key={curlElem.id} >
                                    <h3>{curlElem.name}</h3>
                                    <div className='flex gap-3'>
                                        <button onClick={() => editeData(curlElem.id)}><i className="far fa-edit text-xl  " aria-hidden="true" ></i></button>
                                        <button onClick={() => itemDelete(curlElem.id)}><i className="fa fa-trash  text-xl  " aria-hidden="true"></i></button>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
                <div className=''>
                    <button className='w-40 p-2 m-3 bg-white text-dark rounded clear' onClick={check}>CHECK LIST</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList