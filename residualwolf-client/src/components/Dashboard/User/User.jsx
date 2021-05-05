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
        <div class="container padding-left-mobile">
          <h3>Users</h3>
          <div class="row mb-5 mt-3 user-table">
            <table class="table table-striped font-bold table-responsive-sm">
              <thead>
                <tr className="font-16">
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>  
                  <th scope="col">Role</th>                   
                </tr>
              </thead>
              <tbody>
                {users && users.length > 0
                  ? users.map((user, i) => {
                      return <SingleUser user={user} key={i} index={i} />;
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default User;
