import React from 'react';
import './Style.css';

const Contactus = () => {
    return (
        <div className="container">
            <div className="contact">
                <form>
                    <div class="mb-3 form">
                        <input type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div class="mb-3 form">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Address" required />
                    </div>
                    <div class="mb-3 form">
                        <input type="tel" className="form-control" placeholder="Phone Number" id="exampleInputPhoneNo" required />
                    </div>
                    <div>
                        <textarea rows="5" cols="100" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-dark">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contactus;