import Particles from "react-tsparticles"
import React from 'react'
import {IconFork} from './assets/svg/IconFork'

class ParticlesContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            particlesInit: false,
            particlesLoaded: false,
        }
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
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push"
                                },
                                onDiv: {
                                    elementId: "repulse-div",
                                    enable: false,
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
                                    speed: 3
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
                                    active: false,
                                    radius: 0,
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
                                    enable: true,
                                    rotate: {
                                        x: 600,
                                        y: 1200
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
                                    speed: 10,
                                    sync: true
                                },
                                random: false,
                                value: 0.6
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
                                    speed: 0.1,
                                    sync: false
                                },
                                random: true,
                                value: 2
                            }
                        },
                        polygon: {
                            draw: {
                                enable: true,
                                lineColor: "rgba(0,0,0,0.5)",
                                lineWidth: 0.5
                            },
                            enable: true,
                            position: {
                                x: 50,
                                y: 50
                            },
                            inlineArrangement: "equidistant",
                            scale: 0.8,
                            type: "inline",
                            url: "https://particles.js.org/images/smalldeer.svg"
                        },
                    }}/>
            )
    }
}
export default ParticlesContainer