import React, { Component } from 'react';

import Spinner from "../spinner";
import ErrorIndicator from '../error-indicator';

// withData это функция-обертка, в нее помещаются ItemList
// и функция которая возвращает
// объект имен (людей или кораблей или планет).
// withData возвращает ItemList(список) того,
// что мы в нее положили.

const withData = (View) => {

  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {

      this.props.getData()
        .then((data) => {
          this.setState({
            data: data
          });
        });
    };

    render() {

      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      };

      return <View {...this.props} data={data} />;
    }
  }
};

export default withData;