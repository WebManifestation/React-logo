import React from 'react';	
import Config from '../config';


export default class Block extends React.Component {

	transform(transformString) {
		return {
			'MozTransform': transformString,
			'OTransform': transformString,
			'WebkitTransform': transformString,
			transform: transformString,
		};
	}

	transition(time) {
		return {
			'MozTransition': 'all ' + time + ' linear',
			'OTransition': 'all ' + time + ' linear',
			'WebkitTransition': 'all ' + time + ' linear',
			transition: 'all ' + time + ' linear'
		};
	}

	getStyles() {

		let style = {
			bottom: '50%',
			left: 0,
			width: Config.get('blockWidth'),
			height: Config.get('blockHeight'),
			marginLeft: '-' + Config.get('blockWidth') / 2,
			marginBottom: '-' + Config.get('blockHeight') / 2,
			backgroundColor: 'hsl(250, 50%, 50%)',
			position: 'absolute',
			boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
			WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
			MozBoxShadow:'0px 0px 5px 0px rgba(0,0,0,0.75)'
		};

		// console.log(this.props);

		let transitionTime = this.props.time ? this.props.time : '1s';


		Object.assign(style, this.props.position);

		if(!this.props.isIn) {
			// console.log(this.props.exit);
			Object.assign(style, this.transform(this.props.exit));
		}


		Object.assign(style, this.transition(transitionTime));

		return style;
	}

	render() {

		return <div className={this.props.name} style={this.getStyles()}/>;
	}
}