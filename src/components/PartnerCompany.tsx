import image1 from '../assets/images/empresas/cra.png';
import image2 from '../assets/images/empresas/elephant.png';
import image3 from '../assets/images/empresas/kasterz.png';
import image4 from '../assets/images/empresas/logo_liz.jpg';
import image5 from '../assets/images/empresas/tyrion.png';
import image6 from '../assets/images/empresas/uno.png';
import './PartnerCompany.css';

const PartnerCompany: React.FC = () => {
    return (
        <section className='PartnerCompany'>
            <h2 className='title'>Empresas de Grupo CODESI</h2>
            <div className='imagesdiv'>
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
                <img src={image5} />
                <img src={image6} />
            </div>

        </section>
    );
}

export default PartnerCompany;