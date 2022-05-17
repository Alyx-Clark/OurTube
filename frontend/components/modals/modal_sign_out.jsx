import React from 'react';
import logoutpic from '../../../app/assets/images/logoutpic.png';
import Modal from '../modals/modal';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


// let routeChange = function () {
//     let path = '/';
//     let history = useHistory();
//     history.push(path);
// }


function Modal_sign_out({closeModal2, logout, user}) {
    const [openModal3, setOpenModal3] = useState(false)
    return (
        <div className='modal_sign'>
            <div className='modal_sign_top'>
                <img src={user.profilePic} />
                <div className='modal_sign_info'>
                    <p>{user.userName}</p>
                    <button onClick={() => {setOpenModal3(true)}}>Manage your Goodle Account</button>
                </div>
            </div>
            {/* <div className="modal_sign_email">
                <p>{user.email}</p>
            </div> */}
            <div className='modal_sign_bottom'>
                <button className='modal_sign_button' onClick={() => {
                    logout();
                    closeModal2(false);
                    //routeChange();
                }}>
                    <img src={logoutpic} alt="" />
                    Sign out
                </button>
            </div>
            {openModal3 && <Modal closeModal={setOpenModal3}/>}
        </div>
    )
}

export default Modal_sign_out;