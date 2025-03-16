import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password
            });

            // Armazenar o token no localStorage
            localStorage.setItem('token', response.data.token);

            // Redirecionar para a página inicial
            navigate('/perfil');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <body className="bg-lite">
            <section className="vh-100">
                <div className="container py-2 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="bg-white text-dark rounded-5">
                                <div className="p-5 text-center">
                                    <div className="mb-md-5 mt-md-4">
                                        <h2 className="mb-2 text-capitalize">Olá Músico</h2>
                                        <p className="text-dark-50 mb-4">Bem vindo ao Zene!!</p>

                                        <form onSubmit={handleLogin}>
                                            <div className='p-3'>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control p-3 me-3 rounded-5"
                                                    placeholder="Digite seu Usuário"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className='p-3'>
                                                <input
                                                    type="password"
                                                    id="senha"
                                                    name="senha"
                                                    className="form-control p-3 me-3 rounded-5"
                                                    placeholder="Digite sua Senha"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div className="text-end">
                                                    <a href="" className="text-dark">
                                                        <small>Esqueceu sua senha?</small>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="m-3">
                                                <button type="submit" className="rounded-5 w-100 text-white btn btn-lg btn-dark">
                                                    Acessar
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div>
                                        <small className="mb-0">Não tem uma conta na Zene? </small>
                                        <a href="/cadastro" className="text-dark">Cadastre-se </a>
                                        <ul className="list-unstyled mt-5">
                                            <li className="mb-2">
                                                <i className="bi bi-instagram fs-4 me-3">
                                                    <a href="https://www.instagram.com/accounts/login/?hl=en"></a>
                                                </i>
                                                <i className="bi bi-facebook fs-4 me-3">
                                                    <a href="https://www.facebook.com/login/"></a>
                                                </i>
                                                <i className="bi bi-google fs-4 me-3">
                                                    <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button%26gar%3DWzEzMywiMjM2NzM2Il0%26sl%3Dtrue&ifkv=ASSHykpEkvcJgwwIGuo99h70xtliPOxx8fLRHSa0oKyprGQnCcUxzEBAk3HWoi6AWDLOILvv9Xd1&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1074482830%3A1741301504264501&ddm=1"></a>
                                                </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
};

export default Login;