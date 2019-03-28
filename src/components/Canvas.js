import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        randomCircles: []
    };

    componentDidMount = () => {
        this.setState(() => ({
            randomCircles: this.getRandomCircles()
        }));
        console.log(this.refs.canvas.offsetHeight);
        //console.log(this.refs.canvas.offsetWidth);
    };
    
    componentDidUpdate = () => {
        const canvas = this.refs.canvas;
        canvas.width = this.props.headerWidth;
        canvas.height = this.props.headerHeight;
        //console.log(canvas.width, canvas.height);

        const ctx = this.refs.canvas.getContext('2d');
        const animate = circles => {
            requestAnimationFrame(() => {
                animate(circles);
            });
            ctx.clearRect(0, 0, this.props.headerWidth, this.props.headerHeight);
            
            circles.forEach(circle => circle.update());
        };

        //const circles = this.getRandomCircles();
        animate(this.getRandomCircles());
    };


    getRandomCircles = (num = 50) => {
        const ctx = this.refs.canvas.getContext('2d');
        //const headerWidth = this.props.headerWidth;
        //const headerHeight = this.props.headerHeight;
        const headerWidth = this.refs.canvas.offsetWidth;
        const headerHeight = this.refs.canvas.offsetHeight;
        const radius = 15;
        let circles = [];
        console.log(headerWidth, headerHeight);

        function Circle(x, y, speedX, speedY, radius, ctx) {
            this.x = x;
            this.y = y;
            this.speedX = speedX;
            this.speedY = speedY;
            this.radius = radius;
            this.ctx = ctx;
    
            this.draw = () => {
                //const ctx = document.getElementById('canvas').getContext('2d');
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
                ctx.strokeStyle = '#34495e';
                ctx.stroke();
            };
    
            this.update = () => {
                if((this.x + this.radius) > headerWidth || (this.x - radius) < 0) {
                    this.speedX = -this.speedX;
                }
    
                if((this.y + radius) > headerHeight || (this.y - radius) < 0) {
                    this.speedY = -this.speedY;
                }

                this.x += this.speedX;
                this.y += this.speedY;
    
                this.draw();
            }
        };
        

        for (let i = 0; i < num + 1; i++) {
            const x = Math.random() * (this.props.headerWidth - radius * 2) + radius;
            const y = Math.random() * (this.props.headerHeight - radius * 2) + radius;
            const speedX = Math.random() - 0.5;
            const speedY = Math.random() - 0.5;
            circles.push(new Circle(x, y, speedX, speedY, radius, ctx));
        }
        //console.log(circles);
        return circles;
    };

    /*
    drawCircles = (num = 50) => {
        const ctx = this.refs.canvas.getContext('2d');
        const radius = 15;

        for (i = 0; i < num + 1; i++) {
            ctx.beginPath();
            const { x, y } = getRandomCoords();
            ctx.arc(x, y, radius, Math.PI * 2, false);
            ctx.strokeStyle = 'purple';
            ctx.stroke();
        }
    };
    */

    render = () => {
        return (
            <canvas
                ref="canvas"
                className="canvas"
            >
            </canvas>
        );
    }
}

export default Canvas;