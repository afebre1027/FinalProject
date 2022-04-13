import React, {useState, useEffect} from 'react';
import { FaSteam } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';

function Steam() {

  const [user, setUser] = useState(null);
  const [gameList, setGameList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUser();
    fetchGames();
  }, []);

  async function fetchUser() {
    const res = await fetch("/api/account");
    const json = await res.json();
    setUser(json[0].user);
  }

  async function fetchGames() {
    const res = await fetch("/api/ownedgames");
    const json = await res
      .json()
      .then(responseJson => {
        setGameList(responseJson[0].gamelist);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  }

  console.log(user, gameList);
  return (
    <section className="steamContainer">
      <div className="steamIcon">
        <h1>
          <FaSteam size={70} style={{ color: '#4e5c64' }} />
        </h1>
      </div>
      <div class="card steamInfo">
        <div class="card-header steamHeader">
          <h2> Username </h2>
        </div>
        <div class="card-body steamBody">
          <h4 class="card-title">Games go here</h4>
          <h6 class="card-text">friends list goes here</h6>
          <a href="http://localhost:3001/api/auth/steam" class="btn btn-primary">
            Sign in
          </a>
        </div>
      </div>
    </section>
  );
}

export default Steam;
