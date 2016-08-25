import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadItems } from '../actions'
import ItemsList from '../components/ItemsList'
import _ from 'lodash'

class VisibleItemsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadingItems: true
        }
    }

    componentWillMount() {
        this.props.loadItems()
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }

    componentWillReceiveProps() {
        this.setState({loadingItems: false})
    }

    handleScroll(event) {
        event.preventDefault()
        this.checkAndIfThenLoadItems()
    }

    checkAndIfThenLoadItems() {
        if (this.checkIfWindowAtBottom() && !this.state.loadingItems) {
            this.props.loadItems()
            this.setState({loadingItems: true})
        }
    }

    checkIfWindowAtBottom() {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    }

    render() {

        const { itemsToDisplay } = this.props

        return (
                <ItemsList items={itemsToDisplay}/>
        )
    }
}

VisibleItemsList.propTypes = {
    itemsToDisplay: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    const {
        entities: {items}
    } = state
    const itemsToDisplay = []

    _.forOwn(items, (item, key) => {
        itemsToDisplay.push(item)
    })

    return {
        itemsToDisplay
    }
}

export default connect(
    mapStateToProps,
    { loadItems }
)(VisibleItemsList)
