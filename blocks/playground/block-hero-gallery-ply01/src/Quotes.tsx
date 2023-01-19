
import React, { useState, useContext } from 'react';
import {
    Arrow,
    Wrapper,
    ContainerArrows,
    Content,
    Quote,
    QuoteBody,
    QuoteContent,
    QuotePerson,
    QuotePersonImage,
    QuotePersonJobTitle,
    QuotePersonName,
} from './Quotes.style';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.blocks.hero-gallery-ply01';

export type QuotesProps = {
    strings: QuotesStrings;
    colors: QuotesColors;
    extra: QuotesExtra;
};

export type QuotesStrings = {};

export type QuotesColors = {};

export type QuotesExtra = {

    aboutDataset: Json;
};

export function Quotes(props: QuotesProps) {
    const { extra } = props;
    const { aboutDataset} = extra;

    const [activeIndex, setActiveIndex] = useState(0);

    const items = aboutDataset

    const { ga } = useContext(SiteContext);

    function onChange(index: number) {
        setActiveIndex(index);

        const item = items[index];
        const { quoteId = '' } = item ?? {};

        ga('component', {
            category: 'quotes',
            label: 'quoteChange',
            quoteId,
        });
    }

    // function renderItem(item: Json, index: number) {
    //     const { imageUrl, name, jobTitle, description } = item;

    //     const style: React.CSSProperties = {
    //         transform: `translateX(${(index - activeIndex) * 100}%)`,
    //     };

    //     return (
    //         <Quote style={style} key={item.id}>
    //             <QuotePerson>
    //                 <QuotePersonImage imageUrl={imageUrl} />
    //             </QuotePerson>
    //             <QuoteContent>
    //                 <QuoteBody>{description}</QuoteBody>
    //             </QuoteContent>
    //             <QuotePerson>
    //                 <QuotePersonName>{name}</QuotePersonName>
    //                 <QuotePersonJobTitle>
    //                     {jobTitle}
    //                 </QuotePersonJobTitle>
    //             </QuotePerson>
    //         </Quote>
    //     );
    // }

    // function renderItems() {
    //     return items.map((item: Json, index: number) =>
    //         renderItem(item, index)
    //     );
    // }
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://livedemo00-joomla.template-help.com/joomla_prod-23811/images/slider/slide-1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://livedemo00-joomla.template-help.com/joomla_prod-23811/images/slider/slide-1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://livedemo00-joomla.template-help.com/joomla_prod-23811/images/slider/slide-1.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );

     

}

type ArrowsProps = {
    items: Json[];
    activeIndex: number;
    onChange: (index: number) => void;
};

export function Arrows(props: ArrowsProps) {
    const { items, activeIndex } = props;

    function onRight() {
        const nextIndex = activeIndex + 1;
        const next = nextIndex < items.length ? nextIndex : 0;
        props.onChange(next);
    }

    function onLeft() {
        const nextIndex = activeIndex - 1;
        const next = nextIndex >= 0 ? nextIndex : items.length - 1;
        props.onChange(next);
    }

    return (
        <ContainerArrows>
            <Arrow onClick={onLeft}>
                <i className='material-icons'>keyboard_arrow_left</i>
            </Arrow>
            <Arrow onClick={onRight}>
                <i className='material-icons'>keyboard_arrow_right</i>
            </Arrow>
        </ContainerArrows>
    );
}

export default Quotes;
