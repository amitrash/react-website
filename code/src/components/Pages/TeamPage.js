import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/teamimg.jpg';
import Team from '../Common/Team';
class TeamPage extends Component{
    render(){
        return(
            <div>
                <Header 
                    image={image}
                 />

             <Team/>
            </div>

         
        )
        
    }
}
export default TeamPage;