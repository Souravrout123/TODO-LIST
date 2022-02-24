import React, { useState } from "react";
import Data from "./user.json";
import { Button, Form } from "react-bootstrap";
import EditUserDetails from "./EditUserDetails";
import CreateUserList from "./CreateUserList";
const User = () => {
  const [mainState, setMainState] = useState(Data); 
  
// with json Data
// const [mainState, setMainState] = useState([]); 

// without json Data

  const [updatedValue, setUpdatedValue] = useState({
    id: "",
    name: "",
    salray: "",
  });
  const [mainSearch, setMainSearch] = useState({
    sreachString: "",
  });
  const [createShow, setCreateShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseForCreateModal = () => setCreateShow(false);
  const handleClose = () => {
    setUpdatedValue({
      id: "",
      name: "",
      salray: "",
    });
    setShow(false);
  };
  const onClickDeleteList = (id) => {
    let filterData = mainState.filter((k) => k.id !== id);
    setMainState(filterData);
  };
  const handleShow = (data) => {
    setUpdatedValue({
      id: data.id,
      name: data.name,
      salray: data.salray,
    });
    setShow(true);
  };
  const showCreateModalBox = () => {
    setCreateShow(true);
  };
  const onChangeSerch = (e) => {
    e.preventDefault();
    setMainSearch({
      sreachString: e.target.value.toLowerCase(),
    });
  };
  const clearAll = () => {
    setMainSearch({
      sreachString: "",
    });
  };
  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
        margin: "0px auto",
      }}
    >
      <div className="d-flex justify-content-between mb-4 align-items-center">
        <div
          style={{
            fontWeight: "600",
          }}
        >
          User List
        </div>
        <Button variant="primary" onClick={showCreateModalBox}>
          Create
        </Button>
      </div>
      {mainSearch.sreachString &&
        mainState.filter((k) =>
          k.name.toLowerCase().includes(mainSearch.sreachString)
        ).length > 0 && (
          <div className="d-flex justify-content-end mb-2">
            <span
              style={{
                cursor: "pointer",
              }}
              className="text-primary"
              onClick={() => clearAll()}
            >
              Clear All
            </span>
          </div>
        )}
      <Form.Control
        type="text"
        placeholder="Search By Name"
        value={mainSearch.sreachString}
        className="mb-4"
        onChange={(e) => onChangeSerch(e)}
      />
      {mainState
        .filter((k) => k.name.toLowerCase().includes(mainSearch.sreachString))
        .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
        .map((data, index) => (
          <>
            <div
              key={index}
              style={{
                display: "flex",
                borderBottom: "1px solid #80808042",
                justifyContent: "space-between",
              }}
            >
              <div className="id">{index + 1}</div>
              <div className="name">{data.name}</div>
              <div className="salary">{data.salray}</div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleShow(data)}
              >
                <svg
                  style={{
                    width: "17px",
                    height: "17px",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => onClickDeleteList(data.id)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{
                    width: "17px",
                    height: "17px",
                    color: "red",
                  }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </>
        ))}
      {mainState.length === 0 ? (
        <div className="p-4 text-center text-muted">
          Please Create the user List
        </div>
      ) : (
        mainState.filter((k) =>
          k.name.toLowerCase().includes(mainSearch.sreachString)
        ).length === 0 && (
          <>
            <div className="d-flex justify-content-center text-black-50">
              No Search Result Found{" "}
            </div>
            <div className="d-flex justify-content-center mb-2">
              <span
                style={{
                  cursor: "pointer",
                }}
                className="text-primary"
                onClick={() => clearAll()}
              >
                Reload
              </span>
            </div>
          </>
        )
      )}

      <EditUserDetails
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        updatedValue={updatedValue}
        setUpdatedValue={setUpdatedValue}
        mainState={mainState}
        setMainState={setMainState}
        setShow={setShow}
      />
      <CreateUserList
        handleCloseForCreateModal={handleCloseForCreateModal}
        createShow={createShow}
        mainState={mainState}
        setMainState={setMainState}
        updatedValue={updatedValue}
        setUpdatedValue={setUpdatedValue}
        setCreateShow={setCreateShow}
      />
    </div>
  );
};

export default User;
