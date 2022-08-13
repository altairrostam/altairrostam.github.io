import styles from './projects.module.css';
const Projects = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.title}><h1>Projects💻</h1></div>
            <div className={styles.grid}>
                <div className={styles.gridContentRow}>
                    <div>
                        <h2>Tech Stack</h2>
                        <ul>
                            <li><h3><i className={"fa-brands"+" "+"fa-react"+" "+"fa-xl"}/>&nbsp;React</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-python"+" "+"fa-xl"}/>&nbsp;Django</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-js"+" "+"fa-xl"}/>&nbsp;NextJS</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-python"+" "+"fa-xl"}/>&nbsp;Python</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-js"+" "+"fa-xl"}/>&nbsp;Javascript</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-html5"+" "+"fa-xl"}></i>&nbsp;HTML</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-css3"+" "+"fa-xl"}></i>&nbsp;CSS</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-python"+" "+"fa-xl"}/>&nbsp;PostgreSQL</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-digital-ocean"+" "+"fa-xl"}></i>&nbsp;DigitalOcean</h3></li>
                            <li><h3><i className={"fa-brands"+" "+"fa-python"+" "+"fa-xl"}/>&nbsp;Orthanc</h3></li>

                        </ul>
                    </div>

                </div>
                <div className={styles.gridContentColumn}>
                        <div>
                            <img src="https://via.placeholder.com/150C"></img>
                            <h2>Sicosa2U</h2>
                            <p>Web application for automatic COVID-19 Detection based on MRI Lung Images</p>
                            <ul>
                                <li>React</li>
                                <li>MUI 5</li>
                                <li>Django</li>
                                <li>Keras</li>
                                <li>OpenCV</li>
                                <li>CornerstoneJS</li>
                                <li>DigitalOcean</li>
                            </ul>
                            <button>Docs Coming Soon</button>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150C"></img>
                            <h2>iBrain2U</h2>
                            <p>Web based automatic brain disease classification with annotation tools on MRI Brain Images application</p>
                            <ul>
                                <li>React</li>
                                <li>MUI 5</li>
                                <li>Django</li>
                                <li>Keras</li>
                                <li>OpenCV</li>
                                <li>CornerstoneJS</li>
                                <li>DicomParser</li>
                                <li>Orthanc</li>
                                <li>DigitalOcean</li>
                            </ul>
                            <button>Docs Coming Soon</button>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150C"></img>
                            <h2>iDerm4U</h2>
                            <p>Online consultation for skin diseases for clinic and patient with deep learning integration on Skin Images</p>
                            <ul>
                                <li>React</li>
                                <li>MUI 5</li>
                                <li>Django</li>
                                <li>Keras</li>
                                <li>OpenCV</li>
                                <li>DigitalOcean</li>
                            </ul>
                            <button>Docs Coming Soon</button>
                        </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;