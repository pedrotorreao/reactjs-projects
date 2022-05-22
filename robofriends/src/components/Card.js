import React from 'react'; // needed for jsx

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='avatar' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

/*
#1 - standard:
const Card = (props) => {
  ...
  <img alt='avatar' src={`https://robohash.org/${props.id}?200x200`} />
  ...
  <h2>{props.name}</h2>
  <p>{props.email}</p>
  ...
}

#2 - destructuring:
const Card = (props) => {
  const {name, email, id} = props;
  ...
  <img alt='avatar' src={`https://robohash.org/${id}?200x200`} />
  ...
  <h2>{name}</h2>
  <p>{email}</p>
  ...
}

#2 - destructuring in the argument list:
const Card = ({name, email, id}) => {
  ...
  <img alt='avatar' src={`https://robohash.org/${id}?200x200`} />
  ...
  <h2>{name}</h2>
  <p>{email}</p>
  ...
}
*/
