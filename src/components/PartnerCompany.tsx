
import './PartnerCompany.css';

const BASE_URL = '/images';


const PartnerCompany: React.FC = () => {
    return (
        <section className='PartnerCompany'>
            <h2 className='title'>Empresas de Grupo CODESI</h2>
            <div className='imagesdiv'>
                <a href="https://www.instagram.com/tyrionburgers?igsh=emF3ZndvOXV6MnNy"
                   target="_blank">
                    <img src={`${BASE_URL}/empresas/tyrion.png`} />
                </a>

                <img src={`${BASE_URL}/empresas/logo_liz.jpg`} />

                <a href='https://kasterz.com' 
                   target="_blank">
                    <img src={`${BASE_URL}/empresas/kasterz.png`} />
                </a>
                <img src={`${BASE_URL}/empresas/uno.png`} />

                <img src={`${BASE_URL}/empresas/cra.png`} />

                <a href='https://www.instagram.com/elephant_cun?igsh=MTN3aTZiOGJod3NkNA=='
                   target="_blank">
                    <img src={`${BASE_URL}/empresas/elephant.png`} />
                </a>

            </div>

        </section>
    );
}

export default PartnerCompany;