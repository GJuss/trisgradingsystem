import { Link, Outlet } from 'react-router-dom'
import DepEdLogo from '../assets/depedlogo.png'

export default function LandingPageLayout() {
    return (
        <>
            <header>
                <h1>TRIS</h1>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>


            <main >
                <section id='home'>
                    <article>
                        <h1>Welcome to TRIS</h1>
                        <p>Taysan Resettlement Integrated School (TRIS) is the first integrated school in Schools Division of Legazpi City.  TRIS started on January 2007 as a small learning community but with dreams of expanding one day. It was granted the permit to operate on July 8, 2008. The school was founded with the purpose of providing basic education to the displaced school children who were victims of super Typhoon Reming in 2006.</p>
                    </article>
                </section>
                <hr />
                <section id='about'>
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
                </section>
                <section>
                    <Outlet />
                </section>
            </main>

            <footer id='contact'>
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
                <p>@2024 Taysan Resetlement Integrated School -Legazpi City. All rights reserved.</p>
            </footer>
        </>
    )
}