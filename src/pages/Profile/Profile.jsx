import React, {useState} from "react";
import './Profile.css'
import { CgProfile } from 'react-icons/cg'
import  { BsCardChecklist } from'react-icons/bs'
import { SlLogout } from 'react-icons/sl'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import profileImg from "../../assets/icon_google.svg"
import { MdAddAPhoto } from 'react-icons/md'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { BiSend } from 'react-icons/bi'
const Profile = () => {
    const [page,setPage] = useState('profile')
    const [variant, setVariant]= useState(0)
    const [isModalOpen,setIsModalOpen]=useState(false)
    function submitData(e){
        e.preventDefault()
        setIsModalOpen(true)
    }
    return( <div className="profile_wrapper">
    <div className="dashboard active" onClick={(e)=> e.target.classList.toggle('active')} >
        <div className={page === 'profile' ? "dashboard_btn active" : "dashboard_btn"}>
          <button onClick={(e)=> setPage(('profile'))}>
              <CgProfile/>
              <p>Profile</p>
          </button>
        </div>
        <div className={page === 'quizzes' ? "dashboard_btn active" : "dashboard_btn"}>
            <button onClick={(e)=> setPage(('quizzes'))}>
                <AiOutlineUnorderedList/>
                <p>My Quizzes</p>
            </button>
        </div>
        <div className={page === 'result' ? "dashboard_btn active" : "dashboard_btn"}>
            <button onClick={(e)=> setPage(('result'))}>
                <BsCardChecklist/>
                <p>My Results</p>
            </button>
        </div>
        <div className="dashboard_btn">
            <button onClick={()=> window.location='/login'}>
                <SlLogout/>
                <p>Log out</p>
            </button>
        </div>
    </div>
    <div className="information">
        {page === 'profile' && <div className="profile_information">
            <div className="profile_banner">
                <div className="profile_image">
                    <img src={profileImg} alt="s"/>
                    <label htmlFor="profile_input" className='profile_image_label'>
                        <MdAddAPhoto/>
                    </label>
                    <input type="file" style={{display: "none"}} id='profile_input'/>
                </div>
            </div>
            <h2 style={{textAlign: "center"}}>Davron</h2>
        </div>}
        {page === 'quizzes' && <div className="profile_information">
            <div className="quizzes">
                  <form onSubmit={submitData} className='new_quiz'>
                      <label htmlFor="quiz_title">Quiz title</label>
                      <br/>
                      <input id='quiz_title' type="text" placeholder='Your quiz title' name='quiz_title' required />
                      <div className='variant_wrapper'>
                          <p>Your variants</p>
                          <div className="variants">
                              <div className='currrent_variant' onClick={()=>setVariant(1)}>
                                  {variant === 1 ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                              </div>
                              <input id='first_variant' type="text" placeholder='First variant' name='first_variant' required />
                          </div>
                         <div className="variants">
                             <div className='currrent_variant' onClick={()=>setVariant(2)}>
                                 {variant === 2 ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                             </div>
                             <input id='second_variant' name='second_variant' type="text" placeholder='Second variant' required/>
                         </div>
                         <div className="variants">
                             <div className='currrent_variant' onClick={()=>setVariant(3)}>
                                 {variant === 3 ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                             </div>
                             <input id='third_variant' name='third_variant' type="text" placeholder='Third variant' required />
                         </div>
                        <div className="variants">
                            <div className='currrent_variant' onClick={()=>setVariant(4)}>
                                {variant === 4 ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                            </div>
                            <input id='fourth_variant' name='fourth_variant'  type="text" placeholder='Fourth variant' required />
                        </div>
                      </div>
                      <button className='submit_quiz'>
                          Send
                          <BiSend/>
                      </button>
                  </form>
            </div>
        </div>}
        {page === 'result' && <div className="profile_information">
            <div className="result">
                result
            </div>
        </div>}
    </div>
            {isModalOpen && <div className='quiz_modal'>
                <h2>Your quiz has been sent to admin, admin will confirm it soon</h2>
                <button onClick={()=>setIsModalOpen(false)}>OK</button>
            </div>}
  </div>
)
};

export default Profile;
