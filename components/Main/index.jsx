import Image from 'next/image';
import styles from './main.module.css';

const Main = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.gridContent}>
                    <div>
                        <h1>Hi, I&apos;m Altair Rostam🍕</h1>
                    </div>
                    <div>
                        <p>I&apos;m a full-stack web developer, mainly dabbling with ReactJS and Django. Experienced in developing Telemedicine Applications with Deep Learning models integration.</p>
                    </div>
                    <div className={styles.personality}>
                        <p>Why programming is awesome : Because I get to tinker on stuffs without breaking things (literally) 😁</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="https://github.com/altairrostam"  target="_blank" rel="noopener noreferrer"><i className={"fa-brands"+" "+"fa-github-alt"+" "+"fa-2xl"}></i></a></li>    
                            <li><a href="https://dev.to/altairrostam" target="_blank" rel="noopener noreferrer"><i className={"fa-brands"+" "+"fa-dev"+" "+"fa-2xl"}></i></a></li>  
                        </ul>
                    </div>
                </div>
                <div className={styles.gridContent}>
                    <div className={styles.mainImage}>
                        <Image src="/images/mbti-clear.png" alt="me" width="500" height="500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;