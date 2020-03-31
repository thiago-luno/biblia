import React from 'react';
import { FaTextHeight } from 'react-icons/fa';


import './styles.css';

export default function Home() {
  return (
    <div className="scriptures-container">
      <div>
        <h2 className="title-body">Isaías 65</h2>
        <FaTextHeight color="#f02a0e" size={20} style={{marginBottom: '20px', cursor: 'pointer'}}/>

        <p className="verse">1 Fui buscado dos que não perguntavam por mim, fui achado daqueles que não me buscavam; a uma nação que não se chamava do meu nome eu disse: Eis-me aqui. Eis-me aqui.</p>

        <p className="verse">2 Estendi as minhas mãos o dia todo a um povo rebelde, que anda por caminho, que não é bom, após os seus pensamentos;</p>

        <p className="verse">3 Povo que de contínuo me irrita diante da minha face, sacrificando em jardins e queimando incenso sobre altares de tijolos;</p>

        <p className="verse">4 Que habita entre as sepulturas, e passa as noites junto aos lugares secretos; come carne de porco e tem caldo de coisas abomináveis nos seus vasos;</p>

        <p className="verse">5 Que dizem: Fica onde estás, e não te chegues a mim, porque sou mais santo do que tu. Estes são fumaça no meu nariz, um fogo que arde todo o dia.</p>

        <p className="verse">6 Eis que está escrito diante de mim: não me calarei; mas eu pagarei, sim, pagarei no seu seio,</p>

        <p className="verse">7 As vossas iniqüidades, e juntamente as iniqüidades de vossos pais, diz o Senhor, que queimaram incenso nos montes, e me afrontaram nos outeiros; assim lhes tornarei a medir as suas obras antigas no seu seio.</p>
      </div>
    </div>
  )
} 