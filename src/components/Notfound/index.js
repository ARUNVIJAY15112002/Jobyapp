import './index.css'
import Header from '../Header'

const Notfound = () => (
  <>
    <Header />
    <div className="nf-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="nf-icon"
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found</p>
    </div>
  </>
)

export default Notfound
