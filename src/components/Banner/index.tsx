/* eslint-disable @next/next/no-img-element */
import styles from "./banner.module.scss";

export const Banner = () => {
    return (
        <>
            <div className={styles.divBannerGlobal}>
                <div className={styles.textBanner}>
                    <h2>Finalmente é possível!</h2>
                    <h1>Sua jornada para Marte começa aqui <span style={{ color: '#F5D15F' }}>.</span></h1>
                    <h3>A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</h3>
                    <div>
                        <button>Inscreva-se agora</button>
                    </div>
                </div>
                <div className={styles.bannerImg}>
                    <img src="./banner.svg" alt="BannerApliction" />
                </div>
            </div>
            <div className={styles.divOptionsBanner}>
                <span>
                    <img src="./fog.svg" alt="IconFoguete" />
                    <p>Foguetes com a mais alta tecnologia e conforto.</p>
                </span>
                <span>
                    <img src="./band.svg" alt="IconBandeira" />
                    <p>Mais de 100 missões consecutivas com sucesso.</p>
                </span>
                <span>
                    <img src="./telo.svg" alt="IconTelo" />
                    <p style={{ width: "130px" }}>Experiencia única e exclusiva.</p>
                </span>
            </div>
        </>
    );
};