import React from 'react'
import PropTypes from 'prop-types'
import { RoomsPageTemplate } from '../../templates/rooms-page'

const RoomsPagePreview = ({ entry, widgetFor }) => (
  <RoomsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

RoomsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RoomsPagePreview
