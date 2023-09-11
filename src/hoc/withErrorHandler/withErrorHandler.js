import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }
    errorConfirmHandler = () => {
      this.setState((prevState) => ({
        error: null,
      }))
    }
    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null })
        return req
      })

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState((prevState) => ({
            error: error,
          }))
          return Promise.reject(error)
        }
      )
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} closeModal={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler
