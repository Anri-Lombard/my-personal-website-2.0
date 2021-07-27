import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
      <footer className="footer">
        <div>
          <ul className="social-menu"> 
              <li><a href="https://github.com/Anri-Lombard"><i className="fab fa-github"></i></a></li> 
              <li><a href="https://www.linkedin.com/in/anri-lombard-ab37ab201/"><i className="fab fa-linkedin"></i></a></li> 
              <li><a href="https://twitter.com/anri_m_lombard"><i className="fab fa-twitter"></i></a></li> 
              <li><a href="mailto:anri.m.lombard@gmail.com"><i className="fa fa-envelope"></i> </a></li> 
          </ul>
        </div>
        <div >
          <p className="foot-caption">Made with these 2 🤲  and <a href="http://nextjs.org">Next.js</a> &copy; Anri 2021</p>
        </div>
      </footer>
    )
}