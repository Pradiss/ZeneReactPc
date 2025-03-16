import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cadastro = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState(''); // Estado para mensagens de erro

    const handleCadastro = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                nome: nome,
                senha: senha,
                email: email,
            });

            // Verifica se a resposta contém o api_token
            if (response.data.api_token) {
                // Armazena o api_token no localStorage
                localStorage.setItem('api_token', response.data.api_token);

                // Redireciona para a página de login
                navigate('/login');
            } else {
                setErro('Erro ao cadastrar: Token não recebido.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setErro('Erro ao cadastrar. Verifique os dados e tente novamente.');
        }
    };

    return (
        <body className='bg-lite'>
            <section className="container">
                <div className="row d-flex justify-content-center py-5">
                    <div className="card col-11 col-md-10 col-lg-8 col-xl-8 py-5 rounded-5 p-5 shadow">
                        <div className="text-center">
                            <h4 className="text-center text-uppercase">Faça seu cadastro</h4>
                            <p>Cadastre-se</p>
                        </div>

                        {/* Exibe mensagens de erro */}
                        {erro && <div className="alert alert-danger">{erro}</div>}

                        <form onSubmit={handleCadastro}>
                            <div className='p-3 d-flex'>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    className="form-control p-3 me-3 rounded-5"
                                    placeholder="Digite seu Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='p-3'>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control p-3 rounded-5"
                                    placeholder="Digite seu Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='p-3'>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    className="form-control p-3 rounded-5"
                                    placeholder="Crie sua Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="my-3">
                                <button type="submit" className="rounded-5 w-100 text-white btn btn-lg btn-dark">
                                    Cadastrar-se
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-4">
                            <small className="mb-0">Já tem uma conta na Zene? </small>
                            <a href="/login" className="text-dark">Faça seu login</a>
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
            </section>
        </body>
    );
};

export default Cadastro;