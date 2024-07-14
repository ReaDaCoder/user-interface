import{useState} from "react"

function Interface(){
    return(
        <div >
            <header>
                <button class="login">Log In</button>
                <button class="getstarted">Get Started</button>
            </header>
            <h1>Life Planning, Making
                <br/>
                 Easy to Turn Dreams a Reality.</h1>
            <h3>Get Exclusive offers on purchase of any plans</h3>
            <input type="text" placeholder="Your Email"/>
            <button class="signbtn">Sign up</button>
            <h4>Featured Plans</h4>
            <div class="box-grid">
                <div class="box" id="box1">
                    <div>Strategy</div>
                    <h5>Money Momentum</h5>
                    <p>Tract premium helps you start saver investments insights covering</p>
                    <div>7.20%</div>
                    <hr/>
                </div>
                <div class="box" id="box2">
                    <div>Plans</div>
                    <h5>Long Term</h5>
                    <p>Create a vision. To get started, imagine your dream life.</p>
                    <div>14.20%</div>
                    <hr/>
                </div>
                <div class="box" id="box3">
                    <div>Strategy</div>
                    <h5>Focussed</h5>
                    <p>Be Focussed Life Planning, however, can serve as a roadmap or guide</p>
                    <div>11.20</div>
                    <hr/>
                </div>
                <div class="box" id="box4">
                    <div>Plans</div>
                    <h5>Fixed Income</h5>
                    <p>Get multiple benefits, and a lumpsum option & Guaranteed Returns</p>
                    <div>8.20%</div>
                    <hr/>
                </div>
            </div>
            <footer>
                <hr/>
                    <div>Terms Policy</div>
                    <div>Customer Story</div>
                </footer>
        </div>
    );
}

export default Interface