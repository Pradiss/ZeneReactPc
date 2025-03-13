import React, { useEffect, useState} from "react"
import axios from "axios"
import Header from "../componetes/Header"
import Footer from "../componetes/Footer"



const Website = () =>{
    // const [categorias, setCategorias] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [categorias, setCategorias] = useState([])
    

    //é executado com um efeito colateral, ou seja, a resposta de alguma coisa
    //neste caso, ele será executado sempre que página for carregada 
    useEffect(() => {
       axios.get("http://localhost:8000/api/usuarios") 
            .then((resposta) => setUsuarios(resposta.data))
            .catch((error) => console.error("ERROR", error))
    }, [])
    useEffect(() => {
       axios.get("http://localhost:8000/api/categorias") 
            .then((resposta) => setCategorias(resposta.data))
            .catch((error) => console.error("ERROR", error))
    }, [])
    
    return (
    <>
            
        <Header/>
           

            <main>


                <div id="carouselExampleCaptions" className="carousel slide ">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner sectionRadius ">
                        <div className="carousel-item active">
                        <img src="./src/assets/bandateste1.svg" className="d-block w-100 " alt="..."/>
                        <div className="carousel-caption  text-start  ">
                            <h1 className="display-1  ">First slide label</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                            <a href="/" className="btnDefault  rounded-5 ">Acesse aqui</a>
                        </div>
                        </div>

                        <div className="carousel-item">
                        <img src="./src/assets/bandateste1.svg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Second slide label</h1>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>

                        <div className="carousel-item">
                        <img src="./src/assets/bandateste1.svg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Third slide label</h1>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                        
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>


                
                <div className="container space text-center">
                        <h2 className="display-3   "> Melhores Musicos</h2>
                        <p className="espacamento">Conheça os talentosos músicos freelancers que, com sua habilidade e paixão pela música, oferecem performances e serviços excepcionais, criando experiências únicas para cada projeto.</p>
                    <div className="row d-flex justify-content-center ">
                        {usuarios.map((objUsuarios) => (
                        <div className='col-10 col-sm-6 col-md-6 col-lg-3 p-2  '>
                            <div className='rounded-5 p-3 sombra ' >
                            <img src={objUsuarios.foto} className='card-img-top rounded-5' alt='...'/>
                                <div className='text-center'>
                                    <h4 className='mt-4'>{objUsuarios.nome}</h4>
                                    <p className='text-secondary mb-1 text-dark '>{objUsuarios.idInstrumento} | </p>
                                    
                                    <p className=' text-secondary mb-5'>{objUsuarios.cidade} | {objUsuarios.preco}</p>
                                    <a href="" id="btnCard" className="my-4">Perfil</a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                

                <section class=" bg-lite sectionRadius space  ">
                    <div class="container p-3">
                        <h2 class="text-center display-3  ">Confira nossas categorias</h2>
                        <p class="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia commodi
                            velit, nam,
                            sapiente eos iste quasi tenetur exercitationem vitae corporis, ipsa minus. Quasi nisi eius nostrum ipsa ut.
                            Quidem, culpa?</p>
                    


                        <div class="row d-flex justify-content-center align-items-center espacamento mt-5">
                            {categorias.map((objCategorias)=>(
                                <div class='col-6 col-sm-6 col-md-6 col-lg-3  '>
                                <div class='card rounded-5  shadow  overlay' >
                                    <a href='/categorias' >
                                        <img src={objCategorias.foto} class='card-img rounded-5' alt='...'/>
                                        <div class='card-img-overlay d-flex justify-content-center align-items-center'>
                                            <h3 class=' text-white '>{objCategorias.generoMusical}</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            ))}
                        </div>

                        <div class="d-flex justify-content-center align-items-center">

                        <a href="/categorias" class="btnDefault">Veja todas as Categorias<i className="bi bi-arrow-right ms-4"></i></a>
                        </div>
                    </div>
                    
                </section>
                
                <section class=" space   ">
                    <div class="container ">
                        <div class="row">
                            <div class="mt-5 col-lg-6 col-md-12 col-sm-0 space borderRadius shadow " id="img">
                        
                            </div>
                
                            <div class="mt-5 col-lg-6 col-md-12 col-sm-0   p-5">
                                <h5 class="m-0 fw-thin">sobre nos</h5>
                                <h1 class="display-4">Quem somos nós?</h1>
                                <p className="pb-5 ">Somos uma empresa focada em revolucionar o mercado da música nacional,
                                    possibilitando músicos novos e mais experientes a terem mais visibilidade.
                                    Já somos mais de 1 milhão de pessoas na nossa comunidade, e planejamos continuar a expandir.</p>
                    
                            <div className="my-5">

                                    <a href="/login" class="btnDefault">Veja todas as Categorias<i className="bi bi-arrow-right ms-4"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                            
                <section class="space bg-lite">
        
                    <div class="container ">
                        <div class="row  ">
                            
                            <div class="mt-5 col-lg-12 col-md-12 col-sm-0 px-4 px-0 pb-4 ">
                            
                                <h2 class=" display-4">Planos para entrar nos mais ranqueados</h2>
                                <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut at possimus distinctio ipsa illo vero architecto a rem autem sit rerum officiis qui eveniet fugiat natus, voluptatibus error repellat accusamus.</p>
                                <div class="row mt-5">
                                    
                                    <div class="col-md-3  card shadow rounded-5">
                                    <div class="p-4 text-start">
                                        <h5 class="">Special title treatment</h5>
                                        <p class="">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#"id="btnCard">Go somewhere</a>
                                    </div>
                                    </div>
                                    
                                    
                                    <div class="col-md-3  card shadow rounded-5">
                                    <div class="p-4 text-start">
                                        <h5 class="">Special title treatment</h5>
                                        <p class="">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#"id="btnCard">Go somewhere</a>
                                    </div>
                                    </div>
                                    
                                    <div class="col-md-3  card shadow rounded-5">
                                    <div class="p-4 text-start">
                                        <h5 class="">Special title treatment</h5>
                                        <p class="">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#"id="btnCard">Go somewhere</a>
                                    </div>
                                    </div>

                                    <div class="col-md-3  card shadow rounded-5">
                                    <div class="p-4 text-start">
                                        <h5 class="">Special title treatment</h5>
                                        <p class="">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#"id="btnCard">Go somewhere</a>
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <hr className="m-0 "/>



                <section class="space sectionRadiusEnd bg-lite2 ">
    

                    <div class="container">
                        <div class="row ">
                        <h2 class=" text-center mb-5 display-3">Perguntas Frequentes</h2>
                        
                            
                            <div class="mt-5 col-lg-6 col-md-12 col-sm-0 px-4 px-0 pb-4">
                            
                            
                            <div class="accordion accordion-flush shadow " id="accordionFlushExample">
                                <div class="accordion-item">
                                <h2 class="accordion-header ">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    O que é o zene?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Zene é um serviço inovador para músicos e contratantes. Criamos um ambiente onde facilitamos o contato entre essas duas partes de maneira segura.</div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header ">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Como posso divulgar meu trabalho e fazer parte da comunidade?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Basta apenas criar o seu perfil com suas informações corretas e já estará pronto para acessar o nosso serviço.</div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Como posso aparecer nos mais populares?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Para aparecer nos mais populares, seu perfil precisará ser um dos mais requisitados da nossa plataforma.</div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Como farei os pagamentos?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">No nosso site já existe uma aba com as opções de pagamento mais populares.</div>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                            
                            <div class="col-lg-6 col-md-12 text-center py-5  d-flex flex-column justify-content-center ">
                            
                            <div class="accordion accordion-flush shadow " id="accordionFlushExample">
                                <div class="accordion-item">
                                <h2 class="accordion-header ">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    O que é o Zene?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Zene é um serviço inovador para músicos e contratantes. Criamos um ambiente onde facilitamos o contato entre essas duas partes de maneira segura.</div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header ">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Como posso divulgar meu trabalho e fazer parte da comunidade?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Basta apenas criar o seu perfil com suas informações corretas e já estará pronto para acessar o nosso serviço.</div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Como posso aparecer nos mais populares?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Para aparecer nos mais populares, seu perfil precisará ser um dos mais requisitados da nossa plataforma.</div>
                                </div>
                                </div>
                                <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Como farei os pagamentos?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">No nosso site já existe uma aba com as opções de pagamento mais populares.</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            


                        
                        </div>
                    </div>
                </section>
                

                <section class="space">
                    <div class="container borderRadius  p-5 sombra  bgBlack d-flex"> 
                        <div class="row">
                            <div class="mt-5 col-lg-6 col-md-12 col-sm-0 px-4 px-0 pb-4 text-white">
                                <h2 class="display-4" >Freelancer e Bandas da sua Região</h2>
                                <p class='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe laboriosam deleniti tenetur quibusdam voluptatum deserunt obcaecati animi 
                                    optio iste minus possimus consectetur suscipit porro.</p>
                                <div className="my-5">

                                    <a href="/login" class="btnWhite">Veja todas as Categorias<i className="bi bi-arrow-right ms-4"></i></a>
                                </div>
                        
                               
                         
                              
                                
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-0 space borderRadius" id="img">
                                
                            </div>
                    
                        </div>
                    </div>
                    
                </section>
      
               


            </main>
          
            
        <Footer/>
     
    
     </>    
    );


}

export default Website