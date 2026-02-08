import { useRef } from "react"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export default function GetStarted() {
    const recaptchaRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);

    const handleRecaptchaChange = (value) => {
        if (value) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!isVerified) {
            alert("Please complete the reCAPTCHA verification");
            return;
        }
        const recaptchaValue = recaptchaRef.current.getValue();
        console.log("Form submitted with reCAPTCHA token:", recaptchaValue);
        recaptchaRef.current.reset();
        setIsVerified(false);
    };

    return (
        <>
            <main className="bg-white">
                <h1>Sign Up your Email to proceed on Grading Portal</h1>
                <form onSubmit={handleSignUp}>
                    <div>
                        <div>
                            <label htmlFor="">Firstname</label>
                            <input type="text" name="firstname" id="firstname" placeholder='Enter your firstname' />
                        </div>
                        <div>
                            <label htmlFor="">Middlename</label>
                            <input type="text" name="middlename" id="middlename" placeholder='Enter your middlename' />
                        </div>
                        <div>
                            <label htmlFor="">Lastname</label>
                            <input type="text" name="lastname" id="lastname" placeholder='Enter your lastname' />
                        </div>
                        <div>
                            <label htmlFor="">Suffix</label>
                            <input type="text" name="suffix" id="suffix" placeholder='Enter your suffix (if any)' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter your password' />
                    </div>
                    <div>
                        <label htmlFor="">Position</label>
                        <select name="position" id="position">
                            <option value="" disabled selected>Select your position</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                    </div>
                    <div>
                        <ReCAPTCHA 
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptchaChange}
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </main>
        </>
    )
}