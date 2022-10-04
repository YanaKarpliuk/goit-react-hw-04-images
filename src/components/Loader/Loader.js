import { Component } from 'react';
import { RevolvingDot } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <RevolvingDot
        height="500"
        width="500"
        color="tomato"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{margin: 'auto'}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}
