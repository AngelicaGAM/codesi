
import './PartnerCompany.css';

const BASE_URL = '/images';


const PartnerCompany: React.FC = () => {
    return (
        <section className='PartnerCompany'>
            <p className='titlesGC title'>Empresas de GRUPO CODESI</p>
            <div className='imagesdiv'>
                
                <img className='imageCompanyes' src={`${BASE_URL}/empresas/atrezzo.png`} />
                

                <img className='imageCompanyes' src={`${BASE_URL}/empresas/exciss.png`} />
                 <a href='https://www.instagram.com/elephant_cun?igsh=MTN3aTZiOGJod3NkNA=='
                   target="_blank">
                    <img className='imageCompanyes' src={`${BASE_URL}/empresas/elephant-nuevo.png`} />
                </a>
                <a href='https://kasterz.com' 
                   target="_blank">
                    <img className='imageCompanyes' src='/images/empresas/krastz.png' />
                </a>
                <img className='imageCompanyes sci-size' src={`${BASE_URL}/empresas/sci.png`} />

               

            </div>

        </section>
    );
}

export default PartnerCompany;