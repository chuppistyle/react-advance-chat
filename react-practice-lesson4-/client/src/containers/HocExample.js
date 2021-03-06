import React, {Component} from 'react'
import HocChild from './HocChild';

class HocExample extends Component{
	constructor(){
		super();

		this.state = {
			currency: {}
		}
	}
	componentWillMount(){
		fetch('https://api.fixer.io/latest?base=USD')
			.then(r =>  r.json())
			.then(data => {
				this.setState({
					currency: data
				})
			})
	}


	render(){
		return(
			<div style={{background:'#fff', color:'#000', padding: 100}}>
				<HocChild currency={this.state.currency}/>
			</div>
		)
	}
}

export default HocExample
