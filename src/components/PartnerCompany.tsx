
import './PartnerCompany.css';

const BASE_URL = '/images';


const PartnerCompany: React.FC = () => {
    return (
        <section className='PartnerCompany'>
            <p className='titlesGC title'>Empresas de GRUPO CODESI</p>
            <div className='imagesdiv'>
                <a href="https://www.instagram.com/tyrionburgers?igsh=emF3ZndvOXV6MnNy"
                   target="_blank">
                    <img className='imageCompanyes' src={`${BASE_URL}/empresas/tyrion.png`} />
                </a>

                <img className='imageCompanyes' src={`${BASE_URL}/empresas/logo_liz.jpg`} />

                <a href='https://kasterz.com' 
                   target="_blank">
                    <img className='imageCompanyes' src='/images/logosClientes/krastz.jpg' />
                </a>
                <img className='imageCompanyes' src={`${BASE_URL}/empresas/cra.png`} />

                <img className='imageCompanyes' src={`${BASE_URL}/empresas/uno.png`} />

              
                <a href='https://www.instagram.com/elephant_cun?igsh=MTN3aTZiOGJod3NkNA=='
                   target="_blank">
                    <img className='imageCompanyes' src={`${BASE_URL}/empresas/elephant.png`} />
                </a>

            </div>

        </section>
    );
}

export default PartnerCompany;