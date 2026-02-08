import TrisLogo from '../assets/trislogo.png'

export default function GetStarted() {
    return (
        <>
            <div className='bg-slate-100 h-screen flex flex-col items-center justify-center fixed w-full '>
                <img src={TrisLogo} alt="Tris Logo" className='rounded-full bg-white opacity-60 h-50 w-50' />
            </div>
            
            <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black h-screen">
                <header className=' '>
                    <h1>TRIS | Get Started</h1>
                </header>

                <section>
                    <p>This is the Get Started Page.</p>
                </section>

                <footer>
                    <p className='text-center text-[10px] w-80 mt-5'>@2024 Taysan Resetlement Integrated School -Legazpi City. All rights reserved.</p>
                </footer>
            </main>
        </>
    )
}