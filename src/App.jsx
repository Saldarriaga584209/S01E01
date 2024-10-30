import { useState } from 'react';
import { img1, img2, img3, img4 } from './assets/images/index.js';
import phrases from './phrases.json';
import { indexRandom } from './helpers/indexRandom.js';
import './App.css';

const images = [img1, img2, img3, img4];

function App() {
	const [phrase, setPhrase] = useState(phrases[indexRandom(phrases.length)]);
	const [img, setImg] = useState(images[indexRandom(images.length)]);

	function changePhrase() {
		setPhrase(phrases[indexRandom(phrases.length)]);
		setImg(images[indexRandom(images.length)]);
	}
	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				{/* Titulo */}
				<h1 className="heading">
					Galletas de la <br />
					fortuna
				</h1>

				{/* Boton */}
				<button onClick={changePhrase} className="btn">
					Probar mi suerte
				</button>

				{/* Contenido */}
				<div className="card">
					<div className="card__body">
						<q className="phrase">{phrase.phrase}</q>
					</div>
				</div>

				{/* Autor */}
				<div className="author">
					<div className="author__body">
						<p>Fuente: {phrase.author}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
