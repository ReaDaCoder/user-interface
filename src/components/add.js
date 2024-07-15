import{useState} from "react"

function Interface(){
    return(
        <div class="back" >
            <header>
                <div class="lyf">Lyf_</div>
                <button class="login">Log In</button>
                <button class="getstarted">Get Started</button>
            </header>
            <h1>Life Planning, Making
                <br/>
                 Easy to Turn Dreams a Reality.</h1>
            <h3>Get Exclusive offers on purchase of any plans</h3>
            <input type="text" placeholder="Your Email"/>
            <button class="signbtn">Sign up</button>
            <div class="featured">Featured Plans</div>
            <div class="explore">Explore all</div>
            <div class="wrapper">
                <div class="box" id="box1">
                <h5>Money Momentum</h5>
                    <p>Tract premium helps you start saver investments insights covering</p>
                    <hr/>
                    <div class="percentage">7.20%</div>
                    <img src="/media/arrow-square-right.png"alt="logo"/>
                </div>
                <div class="box" id="box2">
                <div>Plans</div>
                    <h5>Long Term</h5>
                    <p>Create a vision. To get started, imagine your dream life.</p>
                    <hr/>
                    <div class="percentage">14.20%</div>
                    <img src="/media/arrow-square-right.png" class="blackbox"/>

                </div>
                <div class="box" id="box3">
                <div>Strategy</div>
                    <h5>Focussed</h5>
                    <p>Be Focussed Life Planning, however, can serve as a roadmap or guide</p>
                    <hr/>
                    <div class="percentage">11.20%</div>
                    <img src="/media/arrow-square-right.png"/>

                </div>
                < div class="box" id="box4">
                <div>Plans</div>
                    <h5>Fixed Income</h5>
                    <p>Get multiple benefits, and a lumpsum option & Guaranteed Returns</p>
                    <hr/>
                    <div class="percentage">8.20%</div>
                    <img src="/media/arrow-square-right.png"/>

                </div>
            </div>
            <footer>
                <hr/>
                    <div>Terms Policy</div>
                    <div>Customer Story</div>
                    <img src="/media/icon-arrow.svg" class="bottom-arrow"/>
                </footer>
        </div>
    );
}

export default Interface