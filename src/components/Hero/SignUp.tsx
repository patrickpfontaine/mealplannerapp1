import { useCallback } from 'react';
import {useNavigate} from "react-router-dom";
import styles from './SignUp.module.css';


const SignUp = () => {
  	const navigate = useNavigate();
  	
  	const onRectangleClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onRectangleClick1 = useCallback(() => {
    		navigate("/");
  	}, [navigate]);
  	
  	return (
    		<div className={styles.signUp}>
      			<div className={styles.usernameprompt}>
        				<div className={styles.usernamepromptChild} />
        				<div className={styles.username}>Username</div>
      			</div>
      			<div className={styles.passwordprompt}>
        				<div className={styles.usernamepromptChild} />
        				<div className={styles.username}>Password</div>
      			</div>
      			<div className={styles.confirmpasswordprompt}>
        				<div className={styles.confirmpasswordprompt1}>
          					<div className={styles.usernamepromptChild} />
        				</div>
        				<div className={styles.confirmPassword}>Confirm Password</div>
      			</div>
      			<div className={styles.signupbutton}>
        				<div className={styles.signupbuttonChild} onClick={onRectangleClick} />
        				<div className={styles.signUp1}>Sign up</div>
      			</div>
      			<b className={styles.welcome}>Welcome!</b>
      			<img className={styles.image1Icon} alt="" src="image1.png" />
      			<div className={styles.alreadyHaveAnContainer}>
        				<p className={styles.alreadyHaveAn}>Already have an account?</p>
          					</div>
          					<div className={styles.signinbutton}>
            						<div className={styles.signinbuttonChild} onClick={onRectangleClick1} />
            						<div className={styles.signIn}>Sign In</div>
          					</div>
          					</div>);
        				};
        				
        				export default SignUp;
        				