import React, {Component} from 'react';


export default (propName) => (loaderpath) => (ChildComponent) => {
		return class hocloader extends Component {
			componentDidMount(){
				this.startTime = Date.now()
			}

			componentWillReceiveProps(){
				this.endTime = Date.now()
			}


			propIsEmpty() {
				const prop = this.props[propName];

				if (!prop ||
					(prop.hasOwnProperty('length') && !prop.length) ||
					(!Object.keys(prop).length)
				) {
					return true
				}
				return false
			}

			loaderComponent() {
				return <div><img src={loaderpath} alt="loader"/></div>
			}

			render() {
				const newProp = {
					timeDiff: ((this.endTime - this.startTime) / 1000).toFixed(2)
				}
				return (
					this.propIsEmpty() ? this.loaderComponent() : <div>
							<ChildComponent{...this.props} {...newProp}/>
						</div>
				)
			}
		}
	}
