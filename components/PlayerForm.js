import { Form, Field } from '@leveluptuts/fresh';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_PLAYER = gql`
  mutation addPlayer($player: PlayerInput) {
    addPlayer(player: $player) {
      _id
      firstName
      lastName
      nickname
      email
      createdAt
    }
  }
`;

const PlayerForm = () => {
  const [addPlayer] = useMutation(ADD_PLAYER, {
    refetchQueries: ['getPlayers']
  });

  return (
    <Form
      onSubmit={data => {
        console.log(data)
        addPlayer({
          variables: {
            player: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data["e-Mail"],
              nickname: data.firstName,
              createdAt: new Date()
            }
          }
        });
      }}
    >
      <Field>First Name</Field>
      <Field>Last Name</Field>
      <Field>e-Mail</Field>
    </Form>
  );
};

export default PlayerForm;
