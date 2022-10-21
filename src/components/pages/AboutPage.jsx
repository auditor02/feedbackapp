import Card from "../shared/Card"
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
        <div className="About">
            <h1>About This Project</h1>
              <p>This is a react app to leave feedback
             for product or service </p>
             <p>Version: 1.0.0</p>
             <p>
                <Link to="/">Back To Home</Link>
             </p>
        </div>
    </Card>
  )
}

export default AboutPage
