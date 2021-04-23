import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/portfolioimg.jpg';
import Portfolio from '../Common/Portfolio';

class PortfolioPage extends Component{
    render(){
        return(
            <div>
                <Header 
                    title="About Us"
                    subtitle="It's realy a great story"
                    buttonText="Tell me more"
                    image={image}
                 />
             <Portfolio/>
            </div>

         
        )
        
    }
}
export default PortfolioPage;