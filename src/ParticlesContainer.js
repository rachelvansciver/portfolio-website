import Particles from "react-tsparticles"
import React from 'react'

class ParticlesContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            particlesInit: false,
            particlesLoaded: false,
        }
    }
    componentDidMount() {
        this.setState({particlesInit: true, particlesLoaded:true})
    }
    render(){
        return (
                <Particles
                    className="particles-container"
                    canvasClassName="background-canvas"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={{
                        detectRetina: false,
                        fpsLimit: 30,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                onDiv: {
                                    elementId: "repulse-div",
                                    enable: true,
                                    mode: "repulse"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble",
                                    parallax: {
                                        enable: false,
                                        force: 2,
                                        smooth: 10
                                    }
                                },
                                resize: true
                            },
                            modes: {
                                bubble: {
                                    distance: 40,
                                    duration: 2,
                                    opacity: 8,
                                    size: 6,
                                    speed: 1
                                },
                                connect: {
                                    distance: 80,
                                    lineLinked: {
                                        opacity: 0.5
                                    },
                                    radius: 60
                                },
                                grab: {
                                    distance: 400,
                                    lineLinked: {
                                        opacity: 1
                                    }
                                },
                                push: {
                                    quantity: 4
                                },
                                remove: {
                                    quantity: 2
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                slow: {
                                    active: true,
                                    radius: 2,
                                    factor: 1
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: ["#FFFFFFFF"]
                            },
                            lineLinked: {
                                blink: false,
                                color: "random",
                                consent: false,
                                distance: 40,
                                enable: true,
                                opacity: 1,
                                width: 1
                            },
                            move: {
                                attract: {
                                    enable: false,
                                    rotate: {
                                        x: 300,
                                        y: 300
                                    }
                                },
                                bounce: false,
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: true,
                                speed: 0.1,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: false,
                                    area: 2000
                                },
                                limit: 0,
                                value: 100
                            },
                            opacity: {
                                animation: {
                                    enable: true,
                                    minimumValue: 0.3,
                                    speed: 0.1,
                                    sync: true
                                },
                                random: true,
                                value: 1
                            },
                            shape: {
                                polygon: {
                                    sides: 10
                                },
                                stroke: {
                                    color: "#000000",
                                    width: 0
                                },
                                type: "circle"
                            },
                            size: {
                                animation: {
                                    enable: true,
                                    minimumValue: 0.1,
                                    speed: 0.01,
                                    sync: true
                                },
                                random: true,
                                value: 2
                            }
                        },
                        polygon: {
                            draw: {
                                enable: true,
                                lineColor: "rgba(0,0,0,1)",
                                lineWidth: 5
                            },
                            enable: true,
                            position: {
                                x: 45,
                                y: 25
                            },
                            inlineArrangement: "equidistant",
                            scale: .25,
                            url: "https://raw.githubusercontent.com/rachelvansciver/portfolio-website/fd16877fd227c97e31a9cef85ba78af8153483c0/rocket-solid.svg"
                        },
                    }}/>
            )
    }
}
export default ParticlesContainer