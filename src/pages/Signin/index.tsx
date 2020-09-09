import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src="/img/logo.svg" alt="Logo" />

      <form>
        <h1>Faça seu Logon</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="register">
        <FiLogIn />
        Criar uma conta.
      </a>
    </Content>
    <Background />
  </Container>
);
export default Signin;
