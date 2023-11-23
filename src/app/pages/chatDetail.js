import { useState, useEffect } from "react";

import '../style.css';
import Input from '../components/Input';
import Loading from "../components/Loading";
import BasicDatePicker from "../components/Date";

const MessageDetail = (props) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [create, setCreate] = useState('');

  useEffect(() => {
    detailMessage(props.id);
  }, []);

  const handleCreate = (e) => {
    const inputCreate = e.target.value;
    setCreate(inputCreate);
  };

  const detailMessage = (id) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        setData(result)
        return result
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }

  const createMessage = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "postId": 1,
      "id": 5,
      "name": "wanda",
      "email": "wanda@g.co",
      "body": create
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts/1/comments", requestOptions)
      .then(response => response.json())
      .then((result) => {
        setCreate(result)
        return result
      })
      .catch(error => console.log('error', error));
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div>
          <div className='inbox'>
            <div className='chatBox'>

              <div className='headerTitle lineDetail flex gap-8'>
                <div className='desc flex items-center'>
                  <div className='flex items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#333333" />
                    </svg>
                    <div class="grid">
                      <p className='font-bold title'>{props.title}</p>
                      <p className='font-normal text-xs'>{data.length} Participants</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#333333" />
                  </svg>
                </div>
              </div>

              <div className='m-7'>
                {/* <div className='mb-11'>
                <p className='youColor text-sm'>You</p>
                <div className='flex'>
                  <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">...</button>
                    <div id="myDropdown" class="dropdown-content">
                      <p>Edit</p>
                      <p>Delete</p>
                    </div>
                  </div>
                  <div className='colorMe text-xs' >
                    <p className='message'>No worries it will be completed ASAP I've asking to him yesterday </p>
                    <p>19:32</p>
                  </div>
                </div>
              </div> */}

                <h5 className='oldMessage'><span>Today June 09, 2021</span></h5>
                {data.map((item) => {
                  return <div className='mb-5'>
                    <p className='otherColor text-sm'>{item.name}</p>
                    <div className='flex'>
                      <div className='colorOther text-xs' >
                        <p className='message'>{item.body}</p>
                        <BasicDatePicker label="Basic date picker" />
                      </div>
                      <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">...</button>
                        <div id="myDropdown" class="dropdown-content">
                          <p>Edit</p>
                          <p>Delete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                })}
              </div>

              <div className='createMessage'>
                <Input className='text-xs' placeholder='Type a new message' onChange={(e) => handleCreate(e)} />
                <button onClick={(e) => createMessage()}>Send</button>
              </div>

            </div>

          </div>
        </div>
      </>
    )
  }
}

export default MessageDetail;
