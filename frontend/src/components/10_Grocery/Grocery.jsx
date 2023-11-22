import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import List from './List';
import { v4 as uuidv4 } from 'uuid';
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
};

const Grocery = () => {
  const [name, setName] = useState();
  const [list, setList] = useState(getLocalStorage());
  const [edit, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'Item Not Added', 'danger');
    } else if (name && edit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditId(null);
      setEditing(false);
      showAlert(true, 'Item Edited', 'success');
    } else {
      showAlert(true, 'Item  Added', 'success');
      const newItem = { id: uuidv4(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, 'Item Deleted', 'success');
  };
  const editItem = (id) => {
    const specificId = list.find((item) => item.id === id);
    setName(specificId.title);
    setEditId(id);
    setEditing(true);
  };

  const showAlert = (show = false, message = '', type = '') => {
    setAlert({ show, message, type });
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <div className="container">
      <div
        className="row justify-content-center min-vh-100
      align-items-center"
      >
        <div className="col-7 ">
          <div className="shadow-lg p-3">
            <form action="" className="text-center" onSubmit={handleSubmit}>
              <h3>Grocery bud</h3>
              {alert.show && <Alert {...alert} removeAlert={showAlert} />}
              <div className="input-field d-flex ">
                <input
                  type="text"
                  placeholder="Search"
                  className="formControl w-100 py-2 px-2 "
                  style={{ outline: 0 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="btn btn-info rounded-0" type="submit">
                  {edit ? 'edit' : 'submit'}
                </button>
              </div>
            </form>
            {list.length > 0 && (
              <div className="list-itesm">
                <List
                  items={list}
                  removeItem={removeItem}
                  editItem={editItem}
                />

                <div className="text-center">
                  <button
                    className="btn btn-danger mx-auto
                "
                    onClick={() => setList([])}
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
