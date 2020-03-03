import React, {Component} from 'react';

import bg1 from '../assets/images /home_post.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="bg-center bg-no-repeat" style={{backgroundImage: `url(${bg1})`, height: '90vh'}}>
                    <div className="h-full flex justify-center items-center " style={{backgroundColor: 'rgba(0,0,0,0.85)'}}>
                        <h1 className="text-white -mt-56 text-6xl font-bold uppercase text-center">
                            UMAT Excellence <br/> Awards
                        </h1>
                    </div>
                </div>
                <div className="px-24 mt-16 ">
                    <h2 className="font-semibold uppercase text-center text-4xl">Latest News</h2>
                    <div className="grid grid-cols-3 gap-10 mt-5">
                        <div>
                            <img className="w-full h-64 object-center" src={bg1} alt=""/>
                            <h4 className="text-lg mt-3 font-semibold">Winners announced for the awards</h4>
                        </div>
                        <div>
                            <img className="w-full h-64 object-center" src={bg1} alt=""/>
                            <h4 className="text-lg mt-3 font-semibold">Winners announced for the awards</h4>
                        </div>
                        <div>
                            <img className="w-full h-64 object-center" src={bg1} alt=""/>
                            <h4 className="text-lg mt-3 font-semibold">Winners announced for the awards</h4>
                        </div>
                        <div>
                            <img className="w-full h-64 object-center" src={bg1} alt=""/>
                            <h4 className="text-lg mt-3 font-semibold">Winners announced for the awards</h4>
                        </div>
                        <div>
                            <img className="w-full h-64 object-center" src={bg1} alt=""/>
                            <h4 className="text-lg mt-3 font-semibold">Winners announced for the awards</h4>
                        </div>
                        <div>
                            <img className="w-full h-64 object-center" src={bg1} alt=""/>
                            <h4 className="text-lg mt-3 font-semibold">Winners announced for the awards</h4>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;