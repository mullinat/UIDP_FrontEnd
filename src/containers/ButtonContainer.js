import React  from 'react';
import { connect } from 'react-redux'
import { changeIdentity } from '../actions'
import Button from '../components/Button'
const getVisibleIdentities = (identities) => {
    return identities;
  }

const mapStateToProps =   (state) => {
    return {
      identities: getVisibleIdentities(state.identities)
    }
  }
const mapDispatchToProps =   (dispatch) => {
    return {
        onChangeIdentity: () => {
          dispatch(changeIdentity())
        }
      }
  }
const ButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button)
  
  export default ButtonContainer