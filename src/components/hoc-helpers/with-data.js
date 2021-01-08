import React, { Component } from 'react';

import Spinner from "../spinner";
import ErrorIndicator from '../error-indicator';

// функция-обертка для ItemList

const withData = (View, getData) => {

  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {

      getData()
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