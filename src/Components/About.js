import React from 'react';
import '../css/about.css'
function About() {
    return (
        <div id="About" style={{paddingTop:"10vh"}}>
          <h1 className='headings'>About Us</h1>
            <div className="AboutUs">
    <h1>
    About HackClub RAIT Summer of Code
    </h1>
    <p>
        The HackClub RAIT Summer Of Code is a two-month open-source programme run by the HackClub RAIT this summer. 
        Over the course of two months, participants contribute to a variety of projects under the close supervision of competent mentors. 
        Students learn to contribute to real-world projects from the comfort of their own homes as a result of this exposure. 
        HackClub RAIT Summer of Code anticipates enthusiastic involvement with the goal of flourishing in the exciting open source culture 
        so that we may continue our initiative with a positive impact.
    </p>

    <div class="content" data-aos="fade-right">
            <h1><b>About HackClub</b></h1><br/><br/>
            <h3>HackClub is a global community of hackers. It is an initiative for students by students. It is a platform that lets you try, break and recreate. 
                After all, you can't flutter without trembling. With HackClub you get access to a super awesome community of creative, cheerful, and keen students 
                that will help you to share, learn, grow and develop.
            </h3>
    </div>

    <div class="content" data-aos="fade-left">
            <h1><b>HackClub RAIT</b></h1><br/>
            <h3>HackClub RAIT is here to help you hack! here we don't mean to hack into people's bank account but to be creative and solve real-world problems.
                In case you haven't contributed to open-source if you're anxious about it? Well, now you don't have to worry much about it cause HackClub RAIT is here 
                to focus essentially on <b>open-source</b>.
            </h3>
    </div> 

    <div id="home_vision">
        <h1><b>Vision</b></h1><br/>
        <div data-aos="fade-up">
        <h2>Our aim is to flourish <br/>the thrilling open-source culture<br/> to create a favorable environment for <br/><b>open-source contributions.</b>      
        </h2><br/>
        <h2>Let's come together and learn, interact, and grow. 💻 </h2>
        </div><br/>
    </div>
</div>
        </div>
    )
}

export default About;
