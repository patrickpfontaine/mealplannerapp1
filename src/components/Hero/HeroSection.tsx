/*import React from 'react';
import Logo from './Logo';
import NavigationIcon from './NavigationIcon';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import PartnerLogos from './PartnerLogos';

const HeroSection: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col items-center pt-8 pr-5 pb-32 pl-20 bg-slate-900 max-md:pb-24 max-md:pl-5">
      <nav className="flex flex-wrap gap-5 justify-between w-full max-w-[1548px] max-md:max-w-full">
        <Logo />
        <NavigationIcon />
      </nav>
      <main className="self-stretch mt-40 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <LeftSection />
          <RightSection />
        </div>
      </main>
      <PartnerLogos />
    </header>
  );
};

export default HeroSection;
*/
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './SignIn.module.css';
import image1 from './image1.png';


const HeroSection = () => {
  	
	const navigate = useNavigate(); // Initialize navigate

  	const onRectangleClick1 = useCallback(() => {
		
  	}, []);

	  const onRectangleClick2 = useCallback(() => {
		navigate('/signup');
  	}, [navigate]);

  	
  	return (
    		<div className={styles.signIn}>
      			<div className={styles.usernameprompt}>
        				<div className={styles.usernamepromptChild} />
        				<div className={styles.username}>Username</div>
      			</div>
      			<div className={styles.passwordprompt}>
        				<div className={styles.usernamepromptChild} />
        				<div className={styles.username}>Password</div>
      			</div>
      			<div className={styles.signinbutton}>
        				<div className={styles.signinbuttonChild} onClick={onRectangleClick1} />
        				<div className={styles.signIn1}>Sign in</div>
      			</div>
      			<div className={styles.dontHaveAnContainer}>
        				<p className={styles.dontHaveAn}>Don’t have an account?</p>
          					</div>
          					<div className={styles.signupbutton}>
            						<div className={styles.signupbuttonChild} onClick={onRectangleClick2} />
            						<span className={styles.signUp}>Sign up</span>
          					</div>
          					<b className={styles.welcome}>Welcome!</b>
          					<img className={styles.image1Icon} alt="" src={image1} />
          					</div>);
        				};
        				
        				export default HeroSection;