import React from 'react';
class About extends React.Component{
    render(){
        return(
            <div className ="about">
                <h1 className="about-text">Who is <em>Rachel Van Sciver?</em> </h1>
                <p>I study computer science at Lamar University.
                    I currently work as an intern for Humana doing software development.
                    I enjoy the constant personal development and challenge that programming brings.
                    A few of my favorite sub-sects of programming include data science, web development,
                    and blockchain technology. I am proficient in JavaScript,
                    Java, C#, and C++. I also have experience using Python. In my spare time,
                    I enjoy reading and listening to heavy metal.
                    Here's a few relevant courses I have taken:</p>
                <ul>
                    <li>Data Structures & Algorithms</li>
                    <li>Data Science/ Big Data</li>
                    <li>Discrete Structures</li>
                </ul>
            </div>

        )
    }
}
export default About;