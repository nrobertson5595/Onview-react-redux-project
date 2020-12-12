import React from "react";
import { Button, TextField } from "@material-ui/core";
import { fetchUsers, fetchUserPost } from "../../services/http";
import { connect } from "react-redux";
import {
  setUsersAction,
  setUserPostsAction,
} from "../../redux/actions/userDataActions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxHeight: "50%",
    minWidth: 650,
  },
});

// HomePage function is the main component for the file

const HomePage = ({ users, setUsers, setUserPosts, selectedUsersPosts }) => {
  const classes = useStyles();
  const [filteredUsers, setFilteredUsers] = React.useState(users);

  React.useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  // sortUsers uses filter method to set the state of filteredList

  const sortUsers = ({ target: { value } }) => {
    const filteredList = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filteredList);
  };

  //

  const getAllUsers = async () => {
    const usersFromApi = await fetchUsers();
    setUsers(usersFromApi);
  };

  const getUsersPosts = async (id) => {
    const postsOfUser = await fetchUserPost(id);

    setUserPosts(postsOfUser);
  };

  const renderUsers = () => {
    return filteredUsers.map((user) => (
      <TableRow onClick={() => getUsersPosts(user.id)} key={user.name}>
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{user.address.city}</TableCell>
        <TableCell align="right">{user.company.name}</TableCell>
      </TableRow>
    ));
  };

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <div>
        <div style={{ fontSize: 32 }}> Title: {post.title}</div>
        <div> Body: {post.body}</div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    ));
  };

  return (
    <div style={{ height: "100%" }}>
      <TextField onChange={(e) => sortUsers(e)}> </TextField>
      <Button variant="outlined" onClick={() => getAllUsers()}>
        {" "}
        Fetch users{" "}
      </Button>

      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.length > 0 ? renderUsers(filteredUsers) : ""}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedUsersPosts.length ? (
        <Paper
          style={{ maxHeight: "calc(100vh - 200px)", overflowY: "scroll" }}
          elevation={16}
        >
          {users.find((n) => n.id === selectedUsersPosts[0].userId).name}

          <Paper>{renderPosts(selectedUsersPosts)}</Paper>
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  selectedUsersPosts: state.users.selected_user_posts,
});

const mapDispatchToProps = {
  setUsers: setUsersAction,
  setUserPosts: setUserPostsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
