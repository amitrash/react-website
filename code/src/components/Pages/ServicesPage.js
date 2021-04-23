import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/services.jpg';
import Services from '../Common/Services';
class ServicesPage extends Component{
    render(){
        return(
            <div>
                <Header 
                    image={image}
                 />
             <Services/>
            </div>

         
        )
        
    }
}
export default ServicesPage;