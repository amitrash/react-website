import React , {Component} from 'react';
import Member from './Member';
//imges
import team1 from '../assets/img/Team/1.jpg';
import team2 from '../assets/img/Team/2.jpg';
import team3 from '../assets/img/Team/3.jpg';

const members  = [
    {title:'Kay Garland', role: 'Lead Designer',image:team1},
    {title:'Larry Parker', role: 'Lead Marketer',image:team2},
    {title:'Diana Pertersen', role: 'Lead Developer',image:team3},
];

class Team extends Component {
    
    render(){
        return(
                <section className="bg-light" id="team">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    {members.map((item, index) => {
                            return <Member {...item} key ={index} />
                        })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default Team;