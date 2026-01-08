import { FaLaptopCode, FaMobileAlt, FaCode } from 'react-icons/fa';

function Features() {
    return (
        <section id="features" className="features">
            <h2>What I Do</h2>

            <div className="features-grid">
                <div className="feature-card reveal">
                    <div className="feature-icon">
                        <FaMobileAlt />
                    </div>

                    <h3>Responsive Design</h3>
                    <p>Website nyaman di semua device.</p>
                </div>

                <div className="feature-card reveal">
                    <div className="feature-icon">
                        <FaLaptopCode />
                    </div>

                    <h3>React Development</h3>
                    <p>Membangun UI modern & reusable.</p>
                </div>

                <div className="feature-card reveal">
                    <div className="feature-icon">
                        <FaCode />
                    </div>

                    <h3>Clean Code</h3>
                    <p>Kode rapi dan mudah dikembangkan.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;