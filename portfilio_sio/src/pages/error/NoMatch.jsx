// eslint-disable-next-line react/prop-types
const NoMatch = ({ status }) => {
  return (
    <div>
      <h2>Error: {status}</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NoMatch;
