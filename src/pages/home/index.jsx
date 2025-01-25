import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/lixo.svg";
import api from "../../services/api";
function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputEmail = useRef();
  const inputPhone = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/contacts");

    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post(
      "/contacts",
      {
        name: inputName.current.value,
        email: inputEmail.current.value,
        phone: inputPhone.current.value,
      },
      {
        headers: {
          email: "mihawk@gmail.com",
        },
      }
    );
    getUsers()
  }

  async function deleteUser(id) {
    await api.delete(`/contacts/${id}`, {
      headers: {
        email: "mihawk@gmail.com",
      },
    });
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="name" placeholder="nome" type="text" ref={inputName} />
        <input name="email" placeholder="email" type="email" ref={inputEmail} />
        <input
          name="phone"
          placeholder="telefone"
          type="tel"
          ref={inputPhone}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              nome: <span>{user.name}</span>
            </p>
            <p>
              email: <span>{user.email}</span>
            </p>
            <p>
              telefone: <span>{user.phone}</span>
            </p>
          </div>
          <div>
            <button onClick={() => deleteUser(user.id)}>
              <img src={Trash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
