import { column1, column2, column3 } from "../data/gallery-links";

// eslint-disable-next-line react/prop-types
function Image({ src }) {
  return (
    <img
      src={src}
      className="w-[150px] h-[150px] object-contain shrink-0"
      alt="templates showcase"
    />
  );
}

export default function Gallery() {
  const columnList = [];

  for (let i = 0; i < 5; i++) {
    columnList.push(<Image key="id" src={column1.link2} />);
  }

  return (
    <>
      <div className="flex gap-x-10">
        <div className="column">
          <Image src={column1.link1} />
          <Image src={column1.link2} />
          <Image src={column1.link3} />
          <Image src={column1.link4} />
          <Image src={column1.link5} />
        </div>
        <div className="column">
          <Image src={column2.link1} />
          <Image src={column2.link2} />
          <Image src={column2.link3} />
          <Image src={column2.link4} />
          <Image src={column2.link5} />
        </div>
        <div className="column">
          <Image src={column3.link1} />
          <Image src={column3.link2} />
          <Image src={column3.link3} />
          <Image src={column3.link4} />
          <Image src={column3.link5} />
        </div>
        <div className="column">{columnList}</div>
      </div>
    </>
  );
}
