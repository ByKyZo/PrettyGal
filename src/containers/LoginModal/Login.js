import React, { useContext, useState } from 'react';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useFormik } from 'formik';
import { UserContext } from '../../Context/User.context';
import Loader from '../../components/loader/loader';

const Login = (props) => {

    // const user = useContext(UserContext);
    const { user , setUser } = useContext(UserContext);

    const [isAlreadyMember , setIsAlreadyMember] = useState(false);

    const [userName, setUserName] = useState('');
    const [userMail , setUserMail] = useState('');
    const [userPassword , setUserPassword] = useState('');

    const [signUpSuccessful  , setSignUpSuccessfull] = useState(false);
    const [signUpError , setSignUpError] = useState(null);

    const [connexionSuccessfull , setConnexionSuccessfull] = useState(false);


    const handleInscription = () => {

        let userSignUp = {
            name : userName,
            email : userMail,
            password : userPassword,
        }

        userSignUp = JSON.stringify(userSignUp);

        axios.post('http://localhost/BackEnd_PrettyGale/post/user/signup',userSignUp)
            .then(res => {
                console.log(res);
                if (res.data === 'ok'){
                    setSignUpSuccessfull(true);
                    setSignUpError(null);
                    setTimeout(() => {
                        setIsAlreadyMember(true);
                        setSignUpSuccessfull(false);
                    }, 2000);
                } else {
                    setSignUpSuccessfull(false);
                    setSignUpError(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleLogin = () => {

        let userLogin = {
            name : userName,
            password : userPassword,
        }

        userLogin = JSON.stringify(userLogin);

        axios.post('http://localhost/BackEnd_PrettyGale/post/user/checkconnexion',userLogin)
        .then(res => {

            if (res.data === 'err') throw new Error('Incorrect');

            const user = {
                id : res.data.userID,
                name : res.data.userName,
                mail : res.data.userMail,
                isConnected : true,
                role : res.data.role,
                updateCart : 1,
                cartItemLength : null
            }

            setUser(user);


            setConnexionSuccessfull(true);

            setTimeout(() => {
                setConnexionSuccessfull(false)
                props.closeLoginModal(false)   
            },2000)     

        })
        .catch(err => {
            
            console.log(err);

        })
    }

     return (

         <div className={styles.login_background}>

            {connexionSuccessfull && <Loader />} 
            {signUpSuccessful && <Loader />} 

            <button className={styles.closeLoginModal} onClick={() => props.closeLoginModal(false)}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
            <div>

                { !isAlreadyMember ? <h1>Sign Up</h1> : <h1>Login</h1>}

                <div>
                 {isAlreadyMember ? 'New to this site?' :  'Already a member?' }
                
                <button 
                        onClick={() => setIsAlreadyMember(!isAlreadyMember)}
                        >{!isAlreadyMember ? 'Log In' : 'Sign Up'}
                </button>
                </div>

                {signUpSuccessful && <span className={styles.succesSignUp}>Inscription Réussi</span>}
                {connexionSuccessfull && <span className={styles.succesSignUp}>Vous êtes bien connecté !</span>}

                <div className={styles.inputGroup}>
                    
                    <label htmlFor='username'>Username</label>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type='text' id='username' />
                    {signUpError && signUpError.nameError && <span className={styles.error}>Nom d'utisateur dêja existant</span>}

                </div>

                {
                    !isAlreadyMember &&

                    <div className={styles.inputGroup}>
                        
                        <label htmlFor='email'>Email</label>
                        <input value={userMail} onChange={(e) => setUserMail(e.target.value)} type='email' id='email' />
                        {signUpError && signUpError.mailError && <span className={styles.error}>Email dêja existante</span>}

                    </div>                   
                }

                <div className={styles.inputGroup}>

                    <label htmlFor='password'>Password</label>
                    <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type='password' id='password' />  

                </div>

                { isAlreadyMember && <div className={styles.forgetPassword}>Forgot password?</div>}

                <button
                onClick={() => !isAlreadyMember ? handleInscription() : handleLogin()} 
                    className={styles.submit}
                    >{!isAlreadyMember ? 'Sign Up' : 'Login'}
                </button>

            </div>
             

         </div>
     )

}

export default Login;