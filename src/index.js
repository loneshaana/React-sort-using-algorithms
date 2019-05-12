import React from "react";
import ReactDOM from "react-dom";
import Sort from "./sorting";

import "./styles.css";
const dummy = [
  {
    city: "CityA",
    id: 1,
    hotels: [
      {
        name: "Hotel A"
      },
      {
        name: " Hotel AB"
      }
    ]
  },
  {
    city: "CityB",
    id: 2,
    hotels: [
      {
        name: " Hotel B"
      },
      {
        name: " Hotel BC"
      }
    ]
  },
  {
    city: "CityC",
    id: 3,
    hotels: [
      {
        name: " Hotel C"
      },
      {
        name: " Hotel CD"
      }
    ]
  }
];
class App extends React.Component {
  state = {
    searchBy: "",
    data: new Map(),
    filterdData: new Map()
  };
  componentDidMount() {
    const dataMap = new Map();
    dummy.map(item => {
      dataMap.set(item.city, item.hotels);
    });
    this.setState({ data: dataMap });
  }

  filterData = () => {
    const { searchBy, data } = this.state;
    const filterdData = new Map();
    [...data].map(([k, v]) => {
      v.map(item => {
        if (item.name.toUpperCase().indexOf(searchBy.toUpperCase()) !== -1) {
          if (filterdData.get(k) !== undefined) {
            const list = filterdData.get(k);
            list.push(item.name);
            filterdData.set(k, list);
          } else {
            filterdData.set(k, [item.name]);
          }
        }
      });
    });
    this.setState({ filterdData });
  };
  onChange = ({ target }) => {
    const { value } = target;
    this.setState({ searchBy: value }, () => {
      this.filterData();
    });
  };
  render() {
    const { filterdData } = this.state;
    return (
      <div className="App">
        <input
          name="search"
          value={this.state.searchBy}
          onChange={this.onChange}
        />
        <br />
        {[...filterdData.keys()].map(k => {
          return (
            <ul key={k}>
              <li>
                <div>
                  <b>{k}</b>
                </div>
                <br />
                {filterdData.get(k).map(item => (
                  <li>{item}</li>
                ))}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

function DoSort() {
  return <Sort />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<DoSort />, rootElement);
