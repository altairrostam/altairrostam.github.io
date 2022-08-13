import styles from './footer.module.css';

const Footer = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.gridContent+" "+styles.textLeft}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.gridContent+" "+styles.textRight}>
                    <ul>
                        <li><a href="https://github.com/altairrostam"  target="_blank" rel="noopener noreferrer"><i className={"fa-brands"+" "+"fa-github-alt"+" "+"fa-2xl"}></i></a></li>    
                        <li><a href="https://dev.to/altairrostam" target="_blank" rel="noopener noreferrer"><i className={"fa-brands"+" "+"fa-dev"+" "+"fa-2xl"}></i></a></li>  
                    </ul>
                </div>
            </div>
            <div className={styles.credits}>
                <div><h6>Designed and Built By Altair Rostam with NextJS</h6></div>
            </div>
        </div>
    );
}

export default Footer;