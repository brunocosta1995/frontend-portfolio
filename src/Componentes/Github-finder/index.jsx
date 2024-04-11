import { useEffect, useState } from "react";
import User from "./user";
import './style.css';

export default function GithubFinder() {
  const [userName, setUserName] = useState("brunocosta1995");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubData();
  }

  async function fetchGithubData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const result = await response.json();

    if (result) {
        setUserData(result);
        setLoading(false);
        setUserName('');
    }
  }

  useEffect(() => {
    fetchGithubData();
  }, []);

  function handleChange(event) {
    const { value } = event.target;
    setUserName((prevState) => value);
  }

  if (loading) {
    return <h3>Carregando Dados do Usuário</h3>
  }

  return (
    <div className="github-finder-container">
      <div className="github-input-wrapper">
        <input
          placeholder="Buscar usuário no GitHub..."
          type="text"
          name="input-search"
          value={userName}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Buscar</button>
      </div>
      {
        userData !== null ? <User user={userData}/> : null
      }
    </div>
  );
}
