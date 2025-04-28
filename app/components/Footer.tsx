import { websiteData } from '../data/websiteData'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="copyright">
                        <p>&copy; {websiteData.copyright}</p>
                    </div>
                    <div className="social-icons">
                        {websiteData.social.map((item, index) => (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}