import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const radius = 15;
        const circlesQuantity = 50;
        let circles = [];
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        function Circle(x, y, speedX, speedY, radius, ctx, width = canvas.width, height = canvas.height) {
            this.x = x;
            this.y = y;
            this.speedX = speedX;
            this.speedY = speedY;
            this.radius = radius;
            this.ctx = ctx;
            this.width = width;
            this.height = height;

            this.draw = () => {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
                ctx.strokeStyle = '#34495e';
                ctx.stroke();   
            };

            this.update = () => {
                if ((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0) {
                    this.speedX = -this.speedX;
                }

                if ((this.y + radius) > canvas.height || (this.y - this.radius) < 0) {
                    this.speedY = -this.speedY;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                this.draw();
            };
        };

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circles.forEach(circle => circle.update());
        };

        for (let i = 0; i < circlesQuantity; i++) {
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const speedX = Math.random() - 0.5;
            const speedY = Math.random() - 0.5;
            circles.push(new Circle(x, y, speedX, speedY, radius, ctx, canvas.width, canvas.height));
        }

        animate();
        
        window.addEventListener('resize', () => {         
           canvas.width = canvas.offsetWidth;
           canvas.height = canvas.offsetHeight;
        });       
    };

    render = () => {
        return (
            <canvas
                ref="canvas"
                className="canvas"
            >
            </canvas>
        );
    };
}

export default Canvas;