import React, { useState, useEffect } from 'react';
import './authentication.css';
import userPic from '../../assets/images/student.png';
import universityPic from '../../assets/images/university.png';
import {useNavigate} from 'react-router-dom'

const Registration = () => {
    const [userType, setUserType] = useState('');
    const [noUserType, setNoUserType] = useState('');
    const [stepNo, setStepNo] = useState(1);

    const changeUserType = (input, input2) => {
        setUserType(input);
        setNoUserType(input2)
    };

    const location = useNavigate()

    const changePath = (path) =>{
        location('/' + path)
    }

    const handleNext = () => {
        if (stepNo < 3) {
            setStepNo(stepNo + 1);
        }
    }
    const handlePrev = () => {
        if (stepNo > 1) {
            setStepNo(stepNo - 1);
        }
    }

    const renderContent = () => {

        switch (stepNo) {
            case 1:
                return (
                    <>
                        <h2 className='h11'>Select User Type</h2>

                        <div className='userL'>

                            <img onClick={() => changeUserType('Student', 'Institution')} id='Student' src={userPic} alt='User' />
                            <img onClick={() => changeUserType('Institution', 'Student')} id='Institution' src={universityPic} alt='Institution' />
                        </div>

                        <h3 id='userTypeD'></h3>

                     
                    </>
                )

            case 2:
                if (userType === 'Student') {
                    return (
                        <>  <h2 className='stdH'>Personal Details</h2>

                            <input placeholder='Student Name' className='inp' type="text" />

                            <input placeholder='Institution Name' className='inp' type="text" />

                            <select className='slct' name="gender">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                            </select>

                            <select name="selYear" className='slct' id="">
                                <option value="" disabled selected>Select Current Year</option>
                                <option value="first" >First</option>
                                <option value="second" >Second</option>
                                <option value="third" >Third</option>
                                <option value="four" >Four</option>
                            </select>

                            <select name="selInterest" className='slct' id="">
                                <option value="" disabled selected>Select Interests</option>
                                <option value="coding">Coding</option>
                                <option value="mathematics">Mathematics</option>
                                <option value="physics">Physics</option>
                                <option value="biology">Biology</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="literature">Literature</option>
                                <option value="psychology">Psychology</option>
                                <option value="languages">Languages</option>
                                <option value="economics">Economics</option>
                                <option value="philosophy">Philosophy</option>
                                <option value="political-science">Political Science</option>
                                <option value="art-history"> History</option>
                               
                               
                            </select>



                        </>

                    );
                }
                else {
                    return (
                        <>
                          <h2 className='stdH'>Institution Details</h2>

<input placeholder='Institution Name' className='inp' type="text" />

<input placeholder='Institution Grade' className='inp' type="text" />


<input type="text" placeholder='Institution Location' className='inp' />

<select className='slct' name="gender">
    <option value="" disabled selected>Select Institution Type</option>
    <option value="engineering" >Engineering</option>
    <option value="management" >Management</option>
    <option value="medical" >Medical</option>
    <option value="arts" >Arts</option>
    <option value="science" >Science</option>
    <option value="commerce" >Commerce</option>
</select>

<select name="selInterest" className='slct' id="">
    <option value="" disabled selected>Select Autonomous Status</option>
    <option value="autonomous">Autonomous</option>
    <option value="nonautonomous">Non Autonomous</option>
   
   
</select>

                        </>
                    )
                }

            case 3:
                if (userType === 'Student') {
                    return (
                        <>
                        <h2 className='step3h'>
                            Verification     </h2>
                                <input className='inp' type="text" placeholder='Enter a Email ID' />

                                <input className='inp' type="password" placeholder='Create a Password' id="" />

                                <p className='uploadId'>Upload College ID</p>
                                <input className='inp' type="file"  id="" />



                        </>
                    );
                }
                else {
                    return (
                        <>
                             <h2 className='step3h'>
                            Verification     </h2>
                                <input className='inp' type="text" placeholder='College Official Email ID' />

                                <input className='inp' type="password" placeholder='Create a Password' id="" />

                                <p className='uploadId'>Upload College Document</p>
                                <input className='inp' type="file"  id="" />

                   

                        
                        </>
                    )
                }
            default:
                return null;
        }
    }

    useEffect(() => {
        document.getElementById('userTypeD').innerHTML = userType;

        const element = document.getElementById(userType);
        const element2 = document.getElementById(noUserType)

        if (element) {
            element.style.backgroundColor = 'var(--material)';
            element2.style.backgroundColor = 'var(--light)'
        }
    }, [userType]);

    return (


        <div className='regBg'>
            <div className='regBox'>
                <div className='steps'>
                    <i className={`fa-solid fa-1${stepNo === 1 ? ' active' : ''}`} id='step1'></i>
                    <hr />
                    <i className={`fa-solid fa-2${stepNo === 2 ? ' active' : ''}`} id='step2'></i>
                    <hr />
                    <i className={`fa-solid fa-3${stepNo === 3 ? ' active' : ''}`} id='step3'></i>
                </div>

                {renderContent()}

                <div className='buttonNext'>
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>

                <p className='alreadyR'>Already Registered?<span onClick={() => changePath('login')}> Login</span> </p>
            </div>
        </div>
    );
};

export default Registration;
