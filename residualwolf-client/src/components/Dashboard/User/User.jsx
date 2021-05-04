import React, { useContext, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Context from "../../../context/ResidualWolf/Context";
import SingleUser from "./SingleUser";

function User() {
  const context = useContext(Context);
  const { getUsers, users } = context;

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },    
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <main className={classes.content}>
        <div class="container">
          <div class="row mb-5 mt-3">
            {users && users.length > 0
              ? users.map((user, i) => {
                  return <SingleUser user={user} key={i} index={i} />;
                })
              : ""}
          </div>
        </div>
      </main>
    </div>
  );
}

export default User;
