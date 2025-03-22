import "react";
import "../css/marquee.css";

export interface MarqueeLogo {
  src: string;
  class: string;
  href?: string;
  newWindow?: boolean;
}

export const MarqueeComponent = ({ logosTop }: { logosTop: MarqueeLogo[] }) => {
  const cardsTop = logosTop.map((item: MarqueeLogo, index: number) => {
    const logo = <img key={index} src={item.src} className={item.class} />;
    if (item.href !== undefined) {
      if (item.newWindow) {
        return (
          <a href={item.href} target="_blank" rel="noreferrer">
            {logo}
          </a>
        );
      }
      return <a href={item.href}>{logo}</a>;
    }
    return logo;
  });

  // const cardsBtm = logosBtm.map((item: MarqueeLogo, index: number) => (
  //   <img key={index} src={item.src} className={item.class} />
  // ));

  return (
    <div className="marquee__parent">
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">{cardsTop}</div>
          <div className="marquee__group">{cardsTop}</div>
          <div className="marquee__group">{cardsTop}</div>
          <div className="marquee__group">{cardsTop}</div>
        </div>
        {/* <div className="marquee marquee--reverse">
          <div className="marquee__group">{cardsBtm}</div>
          <div className="marquee__group">{cardsBtm}</div>
        </div> */}
      </article>
    </div>
  );
};
