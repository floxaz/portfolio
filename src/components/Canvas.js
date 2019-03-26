import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidUpdate = () => {
        const canvas = this.refs.canvas;
        canvas.width = this.props.headerWidth;
        canvas.height = this.props.headerHeight;
        const ctx = canvas.getContext('2d');
        let x = 300;
        let y = 100;
        let dx = 1;
        let dy = 1;
        let radius = 15;

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, this.props.headerWidth, this.props.headerHeight);

            ctx.beginPath();
            ctx.arc(x, y, radius, Math.PI * 2, false);
            //ctx.strokeStyle = '#34495e';
            ctx.fillStyle = '#e5e5e5';
            //ctx.stroke();
            ctx.fill();
            x += dx;
            y += dy;
            if((x + radius) > this.props.headerWidth || (x - radius) < 0) {
                dx = -dx;
            }

            if((y + radius) > this.props.headerHeight || (y - radius) < 0) {
                dy = -dy;
            }
        }

        animate();
    }

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