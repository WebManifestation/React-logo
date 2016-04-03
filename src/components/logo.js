import React from 'react';
import Block from './block';
import Config from '../config';

export default class Logo extends React.Component {

	transform(transformString) {
		return {
			'MozTransform': transformString,
			'OTransform': transformString,
			'WebkitTransform': transformString,
			transform: transformString,
		};
	}

	constructor(props) {
		super(props);
		const wrapSize = Config.get('wrapSize');
		this.positions = {
			w1: {
				exit: 'translate(-'+ wrapSize +'px, -'+ wrapSize*3 +'px)',
				styles: {
					left: '26.3%',
					zIndex: '91',
					backgroundColor: 'hsl(250, 50%, 50%)',
				}
			},
			w2: {
				exit: 'translate(-'+ wrapSize +'px, '+ wrapSize*3 +'px)',
				styles: {
					left: '42.7%',
					height: Config.get('sBlockHeight'),
					backgroundColor: 'hsl(250, 50%, 30%)',
					zIndex: '94'
				}

			},
			w3: {
				exit: 'translate('+ wrapSize +'px, '+ wrapSize*3 +'px)',
				styles: {
					left: '57.3%',
					height: Config.get('sBlockHeight'),
					backgroundColor: 'hsl(250, 50%, 50%)',
					zIndex: '95'
				}
			},
			w4: {
				exit: 'translate('+ wrapSize +'px, -'+ wrapSize*3 +'px)',
				styles: {
					left: '73.7%',
					backgroundColor: 'hsl(250, 50%, 50%)',
					zIndex: '98'
				}
			},
			m1: {
				exit: 'translateY(-'+ wrapSize*3 +'px)',
				styles: {
					left: '35.4%',
					backgroundColor: 'hsl(250, 50%, 40%)',
					zIndex: '92'
				}
			},
			m2: {
				exit: 'translate(-'+ wrapSize+'px, -'+ wrapSize*3 +'px)',
				styles: {
					bottom: '60%',
					left: '42.7%',
					height: Config.get('sBlockHeight'),
					backgroundColor: 'hsl(250, 50%, 50%)',
					zIndex: '93'
				}
			},
			m3: {
				exit: 'translate('+ wrapSize+'px, -'+ wrapSize*3 +'px)',
				styles: {
					bottom: '60%',
					left: '57.3%',
					height: Config.get('sBlockHeight'),
					backgroundColor: 'hsl(250, 50%, 30%)',
					zIndex: '96'
				}
			},
			m4: {
				exit: 'translateY(-'+ wrapSize*3 +'px)',
				styles: {
					left: '64.6%',
					backgroundColor: 'hsl(250, 50%, 40%)',
					zIndex: '97'
				}
			}
		};

		Object.assign(this.positions.w1.styles, this.transform('skewX(20deg)'));
		Object.assign(this.positions.w2.styles, this.transform('skewX(-20deg)'));
		Object.assign(this.positions.w3.styles, this.transform('skewX(20deg)'));
		Object.assign(this.positions.w4.styles, this.transform('skewX(-20deg)'));

		Object.assign(this.positions.m2.styles, this.transform('skewX(20deg)'));
		Object.assign(this.positions.m3.styles, this.transform('skewX(-20deg)'));



		// Object.assign(this.positions.w1.reset, this.transform(''));





		this.state = {
			isIn: props.isIn
		}
	}

	getStyles() {

		let style = {
			position: 'relative',
			backgroundColor: 'white',
			width: Config.get('wrapSize'),
			height: Config.get('wrapSize'),
			margin: '10px auto',
			overflow: 'hidden',
			cursor: 'pointer'
		};

		return style;
	}

	getPos(name) {

		return this.positions[name].styles;
		
	}

	getExit(name) {

		return this.positions[name].exit;

	}

	render() {
		// console.log(this);
		return (
			<div className="logo" style={this.getStyles()} onClick={this.props.onclick} >
				<Block name="w1" time="1s" position={this.getPos('w1')} exit={this.getExit('w1')} isIn={this.props.isIn}/>
				<Block name="w2" time="1.2s" position={this.getPos('w2')} exit={this.getExit('w2')} isIn={this.props.isIn}/>
				<Block name="w3" time="1.5s" position={this.getPos('w3')} exit={this.getExit('w3')} isIn={this.props.isIn}/>
				<Block name="w4" time="1.8s" position={this.getPos('w4')} exit={this.getExit('w4')} isIn={this.props.isIn}/>
				<Block name="m1" time="2.5s" position={this.getPos('m1')} exit={this.getExit('m1')} isIn={this.props.isIn}/>
				<Block name="m2" time="2.5s" position={this.getPos('m2')} exit={this.getExit('m2')} isIn={this.props.isIn}/>
				<Block name="m3" time="2.5s" position={this.getPos('m3')} exit={this.getExit('m3')} isIn={this.props.isIn}/>
				<Block name="m4" time="2.5s" position={this.getPos('m4')} exit={this.getExit('m4')} isIn={this.props.isIn}/>

			</div>
			)
	}
}