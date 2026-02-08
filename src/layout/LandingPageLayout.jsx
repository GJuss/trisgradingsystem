import { Link, Outlet } from 'react-router-dom'
import TrisLogo from '../assets/trislogo.png'
import DepEdLogo from '../assets/depedlogo.png'

export default function LandingPageLayout() {
    return (
        <>
            <header id='header'>
                <div>
                    <img src={TrisLogo} alt="Tris Logo" className='rounded-full bg-white opacity-60 h-50 w-50' />
                    <h1>TRIS</h1>
                </div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main id='main'>
                <section id='home'>
                    <article>
                        <h1>Welcome to TRIS</h1>
                        <p>TRIS is a centralized grading system designed for Senior High School students and teachers. This system allows students to access their grades online anytime, while teachers can easily input and manage grades in one place. It also supports official school forms from SF1 to SF10, making grading and record-keeping more organized, faster, and more convenient for everyone involved</p>
                    </article>
                    <article>
                        <p>To get started, please click the "Get Started" button above to sign up for an account.</p>
                        <Link to="/get-started" 
                            onClick={
                                () => {
                                    const header = document.getElementById('header');
                                    const main = document.getElementById('main');
                                    const contact = document.getElementById('contact');
                                    const float = document.getElementById('float');
                                    if (float) float.style.display = 'block';

                                    if (header) header.style.filter = 'blur(5px)';
                                    if (main) main.style.filter = 'blur(5px)';
                                    if (contact) contact.style.filter = 'blur(5px)';
                                }
                            }   
                        >Get Started</Link>
                    </article>
                </section>
                <hr />
                <section id='about'>
                    <div>
                        <h1>About TRIS</h1>
                        <p>Taysan Resettlement Integrated School (TRIS) is the first integrated school in Schools Division of Legazpi City.  TRIS started on January 2007 as a small learning community but with dreams of expanding one day. It was granted the permit to operate on July 8, 2008. The school was founded with the purpose of providing basic education to the displaced school children who were victims of super Typhoon Reming in 2006.</p>
                    </div>
                    <div>
                        <img src={DepEdLogo} alt="DepEd Logo" className='rounded-full bg-white opacity-60 h-50 w-50' />
                        <article>
                            <h2>REPUBLIC OF THE PHILIPPINES</h2>
                            <hr />
                            <h3>DEPARTMENT OF EDUCATION</h3>
                        </article>
                    </div>
                    <hr />
                    <article>
                        <h1>The DepEd Vision</h1>
                        <div>
                            <p>We dream of Filipinos who passionately love their country and whose values and competencies enable them to realize their full potential and contribute meaningfully to building the nation.</p>
                            <p>As a learner-centered public institution, the Department of Education continuously improves itself to better serve its stakeholders.</p>
                        </div>
                    </article>
                    <hr />
                    <article>
                        <h1>The DepEd Mission</h1>
                        <div>
                            <p>To protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:</p>
                            <p><b>Students</b> learn in a child-friendly, gender-sensitive, safe, and motivating environment.</p>
                            <p><b>Teachers</b> facilitate learning and constantly nurture every learner.</p>
                            <p><b>Administrators and staff</b>, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen.</p>
                            <p><b>Family, community, and other stakeholders</b> are actively engaged and share responsibility for developing life-long learners.</p>
                        </div>
                    </article>
                    <article>
                        <h1>Our Location</h1>
                        <iframe
                            title="Taysan Resettlement Site"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.615316353517!2d123.74052647462524!3d13.12353888720595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a103b7b26e6147%3A0xf403bdd3fd8e1e8!2sTaysan%20Resettlement%20Site%2C%20Legazpi%20City%2C%20Albay!5e0!3m2!1sen!2sph!4v1770546353978!5m2!1sen!2sph"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            />

                    </article>
                </section>
            </main>

            <footer id='contact'>
                <div>
                    <article>
                        <p><b>Taysan Resettlement Integrated School</b></p>
                        <p>School ID: 500169</p>
                        <p>Taysan Resettlement Site,</p>
                        <p>Barangay 56‑Taysan,</p>
                        <p>Legazpi, Albay 4500</p>
                        <p>Philippines</p>
                    </article>
                    <article>
                        <p><b>Quick Links:</b></p>
                        <a href="https://www.deped.gov.ph/" target="_blank" rel="noopener noreferrer">Department of Education</a>
                        <a href="https://lrpd.deped.gov.ph/" target="_blank" rel="noopener noreferrer">DepEd Learning Resource Portal</a>
                        <a href="https://www.lis.deped.gov.ph/" target="_blank" rel="noopener noreferrer">Learner Information System</a>
                        <a href="https://commons.deped.gov.ph/" target="_blank" rel="noopener noreferrer">DepEd Commons</a>
                        <a href="https://sdo-legazpi-city.com/" target="_blank" rel="noopener noreferrer">SDO Legazpi City</a>
                    </article>
                    <article>
                        <p><b>Contact Information:</b></p>
                        <p>Email: <a href="mailto:500169@deped.gov.ph" target="_blank" rel="noopener noreferrer">500169@deped.gov.ph</a></p>
                        <p>Facebook: <a href="https://www.facebook.com/trisinians" target="_blank" rel="noopener noreferrer">@trisinians  </a></p>
                    </article>
                </div>
                <p>@2024 Taysan Resetlement Integrated School -Legazpi City. All rights reserved.</p>
            </footer>

            <div id='float' className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div>
                    <button
                        onClick={
                            () => {
                                const header = document.getElementById('header');
                                const main = document.getElementById('main');
                                const contact = document.getElementById('contact');
                                const float = document.getElementById('float');

                                if (float) float.style.display = 'none';
                                if (header) header.style.filter = 'none';
                                if (main) main.style.filter = 'none';
                                if (contact) contact.style.filter = 'none';
                        }}
                    >X</button>
                </div>
                <Outlet />
            </div>
        </>
    )
}