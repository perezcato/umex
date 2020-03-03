import React, {Component} from 'react';
import bg1 from "../assets/images /home_post.jpg";


class About extends Component {
    render() {
        return (
            <div>
                <div className="bg-center bg-no-repeat h-64" style={{backgroundImage: `url(${bg1})`}}>
                    <div className="h-full w-full flex justify-center items-center text-white" style={{backgroundColor: 'rgba(0,0,0,0.85)'}}>
                        <h1 className="font-semibold uppercase text-center text-4xl">About</h1>
                    </div>
                </div>
                <div className="px-24 mt-16">
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                    </p>
                    <br/>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem culpa dolores fugiat,
                        itaque necessitatibus neque nulla numquam obcaecati optio quas, sed sint, totam velit
                        voluptate! Amet mollitia saepe voluptatum!
                    </p>
                </div>
            </div>
        );
    }
}

export default About;