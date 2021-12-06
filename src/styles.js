import styled from 'styled-components';

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin: 25px auto 0;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: DarkCyan;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: Teal;
  font-size: 1em;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: Teal;
  background: AliceBlue;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: DarkCyan;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid DarkCyan;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: white;
    color: DarkCyan;
  }
`;

const ButtonItems = styled(Button)`
  margin: 0;
`;

const Text = styled.p`
  color: Teal;
  font-size: 1em;
`;

const TextFilter = styled(Text)`
  margin-left: 10px;
`;

const List = styled.ul`
  margin-top: 15px;
  padding: 15px;
  border: 2px solid DarkCyan;
  border-radius: 3px;
`;

const Items = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
  ButtonItems,
  Text,
  TextFilter,
  List,
  Items,
};
