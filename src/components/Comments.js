const Comments = (props) => {
  console.log("props = ", props.userData);
  const userData = props.userData;
  return (
    <>
      {userData.map((user) => {
        return <div key={user.id}>{user.name} </div>;
      })}
    </>
  );
};

export default Comments;
