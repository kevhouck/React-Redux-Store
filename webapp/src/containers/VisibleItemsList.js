import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadItems } from '../actions'
import ItemsList from '../components/ItemsList'
import _ from 'lodash'

class VisibleItemsList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.loadItems()
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }

    handleScroll(event) {
        event.preventDefault()
        if (this.checkIfWindowAtBottom()) {
            this.props.loadItems()
        }
    }

    checkIfWindowAtBottom() {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    }

    render() {
        const divStyle = {

        }

        const { itemsToDisplay } = this.props

        return (
            <div style={divStyle}>
                <ItemsList items={itemsToDisplay}/>
            </div>
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
