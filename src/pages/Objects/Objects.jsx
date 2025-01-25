import { useEffect } from 'react';
import './Objects.scss';

import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';
import { SliderComponent } from '../../components/Sliders/SliderObjects';

function Objects() {
    useEffect(() => {
        document.title = 'Объекты Агентства недвижимости АЛМА-ВИД';
    }, []);

    return (
        <>
            <div className="wrapper-objects">
                <Header />
                <section className="objects">
                    <SliderComponent/>
                </section>
            </div>
            <Form scrolledThreshold={690}/>
        </>
    );
}

export { Objects };
