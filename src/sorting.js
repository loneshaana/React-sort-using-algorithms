import React from "react";
import { SelectionSort, InsertionSort, QuickSort } from "./manualsort";
const data = [
  { name: "r", city: "Bengalore" },
  { name: "a", city: "Baramulla" },
  { name: "w", city: "Sopore" },
  { name: "n", city: "Kupware" },
  { name: "a", city: "Handwara" }
];

let int = 0;

class Sort extends React.Component {
  state = {
    data
  };

  doSort = data => {
    const sortedData = data.sort(function(a, b) {
      return a.name > b.name;
    });
    this.update(data);
  };
  qSort = data => {
    const sortedData = QuickSort(data);
    this.update(sortedData);
  };
  iSort = data => {
    const sortedData = InsertionSort(data);
    this.update(sortedData);
  };
  update = data => {
    this.setState({ data });
  };
  sSort = data => {
    const sortedData = SelectionSort(data, "city", "ASC");
    this.update(sortedData);
  };
  componentDidMount() {
    // this.doSort(this.state.data); // ibuild sort
    // this.iSort(this.state.data); // insertion sort
    // this.sSort(this.state.data); // selection sort
    this.qSort(this.state.data); // quick sort
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(item => (
          <div key={item.name + int++}>
            {item.name} ->{item.city}
          </div>
        ))}
      </div>
    );
  }
}

export default Sort;
