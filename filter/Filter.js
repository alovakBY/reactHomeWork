const Filter = React.createClass({

	displayName: "Filter",
	
	propTypes: {
		words: React.PropTypes.array,
	},
	
	getInitialState: function() {
		return {words: this.props.words, sort: false, filter: "",}
	},
	
	filterWords: function(e) {
		this.setState({ filter: e.target.value })
	},
	
	sortWords: function (e) {
		this.setState({ sort: e.target.checked })
	},
	
	reset: function() {
		this.setState({ sort: false, filter:"",})
	},
	
	render: function() {

		const wordsListFilter = this.state.words.filter(word =>  word.includes(this.state.filter))
		
		if(this.state.sort) wordsListFilter.sort()
		
	
		const wordsList = wordsListFilter.map(w => React.DOM.option({key: w}, w))
	
	
		return React.DOM.div({className: "Filter"},
			React.DOM.div({className: "FilterHeader"},
			React.DOM.input({type:"checkbox", checked: this.state.sort, onClick: this.sortWords}),
			React.DOM.input({type:"text", value: this.state.filter, onChange: this.filterWords}),
			React.DOM.button({type: "button", onClick: this.reset}, "Сброс")
			),
			React.DOM.div({className: "FilterFooter"},
			React.DOM.select({size: `5`}, wordsList)
			))
	},

})