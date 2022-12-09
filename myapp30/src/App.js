import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="head">
    <img src="./images/gitimg.png" style={{width:"150px"}}></img>
    <h2> --everything-is-local</h2>
   </div>
   <br></br>
    
   <p>Git is a<mark> free and open source</mark> distributed version control system</p>
   <p>designed to handle everything from small to very large projects with</p> 
   <p>speed and efficiency.</p>
   <p>Git is <mark>easy to learn </mark>and has a<mark> tiny footprint with lightning fast performance</mark>.</p> 
   <p>It outclasses SCM tools like Subversion, CVS, Perforce,</p> 
   <p>and ClearCase with features like <mark>cheap local branching,</mark> </p>
   <p>convenient<mark>staging areas,</mark> and<mark> multiple workflows,commits</mark></p>
    <img src="./images/gitimg2.png" id="fix" width="350px" height="250px"></img>
     <br></br>
     <br></br>
     <br></br>
    <div className="all">
     <div className="detail">
        <img src="./images/aboutpic.png" className="photo"></img>
      <div>
        <h3>About</h3>
        <p className="para">the advantage of Git compared</p> 
        <p className="para">to other source control system</p>
      </div>
     </div>
   <div className="detail">
        <img src="./images/docupic.png" className="photo" ></img>
    <div>
        <h3>Documentation</h3>
        <p className="para">Command reference pages,pro</p> 
         <p className="para">Git book content,videos.</p>
        </div>
     </div>
 </div> 
 <div className="all">
 <div className="detail">
        <img src="./images/downpic.png" className="photo"></img>
       <div>
          <h3>Downloads</h3>
           <p className="para">GUI clients and binary releases</p> 
           <p className="para">for all major platforms</p>
        </div>
     </div>
    <div className="detail">
    <img src="./images/commpic.png" className="photo"></img>
    <div>
       <h3>Communication</h3>
        <p className="para">Get involved!Bug Reporting,mailing list</p> 
        <p className="para">Chat development and more.</p>
     </div>
  </div>
</div>
    <br></br>.

    <h4 style={{marginLeft:"250px"}}>Companies & Projects Using Git</h4>
    
    <div>
    <img src="./images/logo1.png" className="pic"></img>
    <img src="./images/logo2.png" className="pic"></img>
    <img src="./images/logo3.png" className="pic"></img>
    <img src="./images/logo4.png" className="pic"></img>
    <img src="./images/logo5.png" className="pic"></img>
    <img src="./images/logo 6.jpg" className="pic"></img>
    </div>
    </div>
  );
}

export default App;
