import React, { useState, useEffect } from 'react';
import './authentication.css';
import userPic from '../../assets/images/student.png';
import universityPic from '../../assets/images/university.png';

const Registration = () => {
    const [userType, setUserType] = useState('______________');
    const [noUserType, setNoUserType] = useState('');
    const [stepNo, setStepNo] = useState(1);

    const changeUserType = (input, input2) => {
        setUserType(input);
        setNoUserType(input2)
    };

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
                        <h2>Select User Type</h2>

                        <div className='userL'>

                            <img onClick={() => changeUserType('Student', 'Institution')} id='Student' src={userPic} alt='User' />
                            <img onClick={() => changeUserType('Institution', 'Student')} id='Institution' src={universityPic} alt='Institution' />
                        </div>

                        <h3 id='userTypeD'>______________</h3>

                    </>
                )

            case 2:
                return (
                    <>
                        <h2>Step 2</h2>

                    </>
                );

            case 3:
                return (
                    <>
                        <h2>Step 3</h2>

                    </>
                );
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
            </div>
        </div>
    );
};

export default Registration;
