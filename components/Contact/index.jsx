import Image from 'next/image';
import styles from './contact.module.css';
const Contact = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.gridContent}>
                    <div>
                        <h1> Get in Touch🤙🏽 </h1>
                    </div>
                    <div>
                        <p>I enjoy tackling new challenges and domains.</p>
                    </div>
                    <div>
                        <p>If you think I can be a great addition to your team, or my skillsets can help with your new upcoming project, or you simply want to say hello to me</p>
                    </div>
                    <div>
                        <button><a href="mailto:altairrostam@gmail.com?subject=Hello">Message me</a></button>
                    </div>
                </div>
                <div className={styles.mainImage}>
                    <Image src="/images/mailbox-clear.png" alt="me" width="230" height="230" />
                </div>
            </div>
        </div>
    );
}

export default Contact;