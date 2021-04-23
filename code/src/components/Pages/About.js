import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import AboutDesc from '../Common/AboutDesc';
import Team from '../Common/Team';
class About extends Component{
    render(){
        return(
            <div>
                <Header 
                    title="About Us"
                    subtitle="It's realy a great story"
                    buttonText="Tell me more"
                    image={image}
                 />
             <AboutDesc/>
             <Team/>
            </div>

         
        )
        
    }
}
export default About;