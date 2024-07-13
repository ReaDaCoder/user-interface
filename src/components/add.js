import{useState} from "react"

function Interface(){
    return(
        <div >
            <h1>Life Planning, Making Easy to Turn Dreams a Reality.</h1>
            <h3>Get Exclusive offers ob purchase of any plans</h3>
            <input type="text" placeholder="Your Email"/>
            <button>Sign up</button>
            <h4>Featured Plans</h4>
            <div class="container">
                <div class="box" id="box1">1</div>
                <div class="box" id="box2">2</div>
                <div class="box" id="box3">3</div>
                <div class="box" id="box4">4</div>
                <hr/>
                <footer>
                    <div>Terms Policy</div>
                    <div>Customer Story</div>
                </footer>
            </div>
        </div>
    );
}

export default Interface