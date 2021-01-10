import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
};

export { Record };

// блок с картинкой (персонаж или планета или корабль),
// описанием и кнопкой Throw error

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {

      this.setState({ loading: true });
      this.updatePerson();
    }
  };

  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    };

    getData(itemId)
      .then((item) => {
        this.setState({
          item: item,
          loading: false,
          image: getImageUrl(item)
        });
      });
  };

  render() {

    const { image, item } = this.state;

    if (!item) {
      return <span>Select a person from a list</span>;
    };

    const content =
      this.state.loading ? <Spinner />
        : <PersonView
            item={item}
            image={image}
            children={this.props.children} />;

    return (
      <div className="item-details card">
        {content}
      </div>
    )
  }

};

const PersonView = ({ item, image, children }) => {

  const { id, name } = item;

  return (
    <React.Fragment>
      <img className="item-image"
        src={image}
        alt="character" />

      <div className="card-body">
        <h4>{name} {id}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  )
};

