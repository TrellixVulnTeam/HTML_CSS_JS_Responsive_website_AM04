import React from 'react'
import '../../styles/contact.scss'

function Contacts(){
    return(
        <div className="contact-page">
            <h1>Contact</h1>
            <div className="personal-details">
                <h2>Get In Touch With Me Through...</h2>
                <div className="conainer-personaldetails">
                    <div className="phone-icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="contact-module--phone" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                            </path>
                        </svg>
                        <a href="#" alt ="">015229962032</a>
                    </div>
                    <div className="email-icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="contact-module--email" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                            </path>
                        </svg>
                        <a href="mailto:shobanamariappan1991@gmail.com" alt="Gmail acount">shobanamariappan1991@gmail.com</a>
                    </div>
                    <div class="gitHub-icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 480 512" class="contact-module--git" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z">
                            </path>
                        </svg>
                        <a href="https://github.com/shobanaM1991" alt ="GitHub Home Page">Github</a>
                    </div>
                    <div class="linkedIn-icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="contact-module--link" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                            </path>
                        </svg>
                        <a href = "https://www.linkedin.com/feed/" alt ="Linked in Home Page">linkedIn</a>
                    </div>
                </div>
            </div>
            <div className="Contact-Form">
                <h2>Contact Me Though the Contact Form I Built...</h2>
                <div className="form-inputs">
                    <form name="contact" netlify>
                        <input type="text" name ="Name" placeholder="Name"></input>
                        <input type="text" name ="email" placeholder="Email"></input>
                        <textarea type="text" name ="message" placeholder="Message"></textarea>
                        <button className="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contacts
