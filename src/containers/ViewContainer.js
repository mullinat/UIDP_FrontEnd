import React  from 'react';
import { connect } from 'react-redux'
import View from '../components/View'
const getVisibleIdentities = (identities) => {
    return identities;
  }

const mapStateToProps =   (state) => {
    return {
      identities: getVisibleIdentities(state.identities)
    }
  }
const ViewContainer = connect(
    mapStateToProps
  )(View)
  
  export default ViewContainer