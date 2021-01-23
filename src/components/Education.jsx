import { Component } from "react";
import university from 'src/images/university.svg'

export default class Education extends Component {
    render() {
        return (
            <section className="education">
                <div className="container mt-120px">
                    <div className="mtu-title">EDUCATION</div>
                    <div className="row justify-content-center align-items-center mtu-education">
                        <div className="col-xl">
                            <div className="card" style={{ height: "214px" }}>
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2005-2010</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={university} alt="univerisity"/>
                                        Inst. La Salle Florida, Buenos aires - Primaria
                                    </p>
                                    <p className="card-text">
                                        Complete mis estudios primarios con un promedio de 7.5
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2011-2017</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={university} alt="univerisity"/>
                                        Inst. La Salle Florida, Buenos aires - Secundaria
                                    </p>
                                    <p className="card-text">
                                        Complete mis estudios secundarios con especialidad en tecnico electronico con un promedio de 7.02
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2017-2021</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={university} alt="univerisity"/>
                                        Autodidacta
                                    </p>
                                    <p className="card-text">
                                        En esta etapa de mi vida fui a algunas universidades, pero ninguna me termino
                                        gustando asi que me dedique a <strong>trabajar</strong> y a <strong>seguir aprendiendo por mi cuenta</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}