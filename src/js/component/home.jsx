import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [nota, setNota] = useState("Recordar");
	const [lista, setLista] = useState([]);
	function eliminartarea(posicion) {
		console.log(posicion);
		let listafiltrada = lista.filter((item, index) => {
			if (index !== posicion) {
				return item;
			}
		});
		setLista(listafiltrada);
	}

	return (
		<div style={{ background: "black" }}>
			<div
				className="container mt-5"
				style={{
					width: "40rem",
					height: "35rem",
					background: "white",
				}}>
				<div
					className="container mt-5, text-muted"
					style={{ textAlign: "center" }}>
					<h1>
						<p style={{ color: "pink" }}>TODOS</p>
					</h1>
				</div>
				<div
					className="container mt-4"
					style={{
						background: "white",
						width: "30rem",
					}}>
					<input
						style={{ textAlign: "center" }}
						type="text"
						placeholder="
			What needs to be done?"
						onChange={(e) => setNota(e.target.value)}></input>

					<ul className="list-group">
						{lista.map((notas, i) => {
							return (
								<div key={i}>
									<li className="list-group-item ">
										{notas}
										<button
											className="btn btn-light, list-group-item "
											onClick={() => eliminartarea(i)}>
											X
										</button>
									</li>
								</div>
							);
						})}
					</ul>
				</div>
				<br></br>
				<button
					className="btn btn-light"
					onClick={() => setLista([...lista, nota])}>
					Añadir
				</button>
			</div>
		</div>
	);
};

export default Home;
