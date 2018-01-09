import React,{Component} from 'react'
import hocloader from './hocloader'

class HocChild extends Component{
	render(){
		const {currency} = this.props;
		/*if (!Object.keys(currency).length){
			return <div>Loading...</div>
		}*/

		return(
			<div>
				As of:  {currency.date}

				<p>1 USD = {currency.rates['EUR']} EUR</p>
				<p>1 USD = {currency.rates['RUB']} RUB</p>
				<p>Time: {this.props.timeDiff}s</p>
			</div>
		)
	}

}

export default hocloader('currency')('http://blog.getresponse.com/uploads/2014/07/monster_loader_02.gif')(HocChild)
