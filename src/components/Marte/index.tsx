/* eslint-disable @next/next/no-img-element */
import styles from './marte.module.scss';


export const Marte = () => {
    return (
        <>
            <div className={styles.divMartGlobal}>
                <div>
                    <img src="./Mars.svg" alt="PlanetMars" />
                </div>
                <div>
                    <h2>POR QUE MARTE?</h2>
                    <h1>Sobre o planeta vermelho</h1>
                    <p>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</p>
                    <p>A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.</p>
                </div>
            </div>
        </>
    );
};