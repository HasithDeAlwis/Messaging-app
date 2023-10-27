export const getSender = (loggedUser, user) => {
  return user[0]._id === loggedUser._id ? user[1].name : user[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
