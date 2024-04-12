import { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import './style.css';

export default function SearchAutocomplete() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);

  async function fetchDataUser() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();

      if (result && result.users && result.users.length) {
        setLoading(false);
        setUserData(result.users.map((userItem) => userItem.firstName));
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        userData && userData.length
          ? userData.filter(
              (userItem) => userItem.toLowerCase().indexOf(query) > -1
            )
          : [];
      setFilteredUser(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event) {
    setShowDropDown(false);
    setFilteredUser([]);
    setSearchParam(event.target.innerText);
  }

  useEffect(() => {
    fetchDataUser();
  }, []);

  if (error) {
    return <h3>{error}</h3>;
  }

  if (loading) {
    return <h3>Carregando dados da API aguarde</h3>;
  }

  return (
    <div className='search-container'>
      <input
        type="text"
        name="search-autocomplete"
        placeholder="Entre com o nome do usuário..."
        value={searchParam}
        onChange={handleChange}
      />
      {
        showDropDown && <Suggestions handleClick={handleClick} data={filteredUser}/>
      }
    </div>
  );
}
