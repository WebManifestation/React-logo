import React from 'react';
import Logo from './logo';

export default class Wrapper extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isIn: true
		}
	}

	getStyles() {

		return({
			backgroundColor: 'hsl(200, 50%, 50%)',
			top: '0',
			left: '0',
			position: 'fixed',
			zIndex: '9999',
			overflow: 'auto',
			width: '100%',
			height: window.innerHeight,
			textAlign: 'center',
			display: 'table'
		});
	}

	toggleIsIn() {
		this.setState({isIn: !this.state.isIn});
	}

	render() {
		// console.log(this);
		return (
			<div className="wrapper" style={this.getStyles()}>
				<div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
					<Logo isIn={this.state.isIn} onclick={this.toggleIsIn.bind(this)}/>
				</div>
			</div>
			)
	}
}