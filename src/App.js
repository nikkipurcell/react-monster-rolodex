import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  }

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users)
    )
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='search'
        searchField={searchField}
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters}  />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   componentDidMount() {
//     fetch(
//       'https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(
//         () => {
//           return { monsters: users }
//         }
//       )
//     )
//   }

//   render() {
//     console.log('render App')
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='search'
//           searchField={searchField}
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters}  />
//       </div>
//     );
//   }
// }

export default App;
