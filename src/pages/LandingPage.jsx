import TrisLogo from '../assets/trislogo.png'
import { Link, Outlet } from 'react-router-dom'
export default function LandingPage() {
    return (
        <>
            <div className=' bg-blue-400 h-screen flex flex-col items-center justify-center '>
                <img src={TrisLogo} alt="Tris Logo" className='rounded-full bg-white opacity-60 h-50 w-50' />
            </div>
            <main className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
                <header className="text-center text-white  w-90 ">
                    <h1 className='text-4xl font-bold text-shadow-2xs text-shadow-black'>Welcome to Taysan Resetlement Integrated School</h1>
                    <p className="text-center text-[13px] font-semibold">Centralized Grading System for Senior High School</p>
                </header>

                <section className='flex justify-around items-center font-semibold text-white text-shadow-xs mt-5'>
                    <div className='p-3 m-3 bg-yellow-500/90 rounded-lg shadow-2xl shadow-blue-900 hover:scale-105 transition-transform duration-300'>
                        <Link to="/Get Started">Get Started</Link>
                    </div>
                    <div className='p-3 m-3 bg-green-500/90 rounded-lg shadow-xl shadow-green-900 hover:scale-105 transition-transform duration-300'>
                        <Link to="/Learn More">Learn More</Link>
                    </div>
                </section>

                <footer className='flex justify-center'>
                    <p className='text-center text-white text-[10px] w-80 mt-5'>@2024 Taysan Resetlement Integrated School -Legazpi City. All rights reserved.</p>
                </footer>
            </main>
        </>
    )
}