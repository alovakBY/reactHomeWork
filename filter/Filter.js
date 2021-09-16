'use strict'

const Filter = React.createClass({

	displayName: 'Filter',

	propTypes: {
		words: React.PropTypes.array.isRequired,
	},

	getInitialState: function() {
		return {
			wordsState: this.props.words,
			InputTextValue: '',
			checked: false,
		}
	},

	filter: function(e) {
		this.setState({ InputTextValue: e.target.value }, this.getFilterSortArr)
	},

	sort: function(e) {
		this.setState({ checked: !this.state.checked }, this.getFilterSortArr)
	},

	reset: function() {
		this.setState({ InputTextValue: '', wordsState: this.props.words, checked: false})
	},

	getFilterSortArr: function() {
		const arr = this.props.words.filter( word => word.includes(this.state.InputTextValue))
		if (this.state.checked) arr.sort()
		this.setState({ wordsState: arr })
	},

	render: function () {

		const option = this.state.wordsState.map( word => {
			return React.DOM.option({ key: word }, word)
		})

		return React.DOM.div(null, 
			React.DOM.input({ type: 'checkbox' , className: 'inputCheckbox', checked: this.state.checked, onClick: this.sort}),
			React.DOM.input({ type: 'text', className: 'inputText',  value: this.state.InputTextValue, onChange: this.filter} ),
			React.DOM.button({ className: 'button' , onClick: this.reset}, 'сброс'),
			React.DOM.div({ className:'bottom' }, 
				React.DOM.select({className: 'select' , size: 5 }, option)
			)
		)
	}

})