const Filter = React.createClass({

	displayName: "Filter",
	
	propTypes: {
		words: React.PropTypes.array,
	},
	
	getInitialState: function() {
		return {
			words: this.props.words, 
			sort: false, 
			filter: "",
		}
	},
	
	filterWords: function(e) {
		this.setState({ filter: e.target.value },this.getFilterSortArr)
	},
	
	sortWords: function (e) {
		this.setState({ sort: e.target.checked },this.getFilterSortArr)
	},
	
	reset: function() {
		this.setState({ sort: false, filter:"",}, this.getFilterSortArr)
	},

	getFilterSortArr: function() {
		const wordsListFilter = this.props.words.filter(word =>  word.includes(this.state.filter))
		if(this.state.sort) wordsListFilter.sort()
		this.setState({words: wordsListFilter})
	},
	
	render: function() {

		const wordsList = this.state.words.map(w => React.DOM.option({key: w}, w))
	
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