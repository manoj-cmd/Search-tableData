import React, { useEffect, useState } from "react";
//import './App.css';
import axios from "axios";
//import logo from './logo.svg';
//import './App.css';
function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  function onChangeHandle(e) {
    console.log("e.target.value", e.target.value);
    if (e.target.value == "") {
      window.location.reload(true);
      const tempArr = user;
      setUser(tempArr);
      return;
    }
    const searchResult = user.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.username.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        item.email.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setUser(searchResult);
  }

  return (
    <div className="App">
   {console.log("arrData", user)}

<input
  type="text"
  onChange={onChangeHandle}
  placeholder="Search.."
  style={{ marginBottom: "20px", marginTop: "20px" , marginLeft: "5px", height: "30px", width:"200px", padding: "3px" }}
/>

<div>
  <table>
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
    </tr>

    {loading ? (
      <h4> Loading ...</h4>
    ) : (
      user.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        );
      })
    )}
  </table>
</div>


    </div>
  );
}

export default App;
