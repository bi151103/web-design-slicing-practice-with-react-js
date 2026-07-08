function CardComponent(props) {
  const { title, thumbSrc, openPositions, cardWidth, cardHeight } = props;
  return (
    <>
      <div
        className={
          cardWidth +
          " " +
          cardHeight +
          " bg-white shadow-xl rounded-xl *:font-bold flex flex-col justify-center items-center gap-[20px]"
        }
      >
        <div className="flex gap-[10px] justify-center w-full items-center">
          <img src={thumbSrc} className="w-[30px] aspect-square" />
          <p className="text-[1.2em]">{title}</p>
        </div>
        <button className="w-4/5 rounded-[4px] py-[10px] border border-gray-600 hover:bg-gray-800 hover:text-white">
          {openPositions} open {openPositions === 1 ? "position" : "positions"}
        </button>
      </div>
    </>
  );
}

export default function JobCardsComponent() {
  const jobPositions = [
    {
      title: "Design",
      thumbSrc: "assets/images/paint-brush.png",
      openPositions: 4,
    },
    {
      title: "Engineering",
      thumbSrc: "assets/images/programming.png",
      openPositions: 8,
    },
    {
      title: "Operations",
      thumbSrc: "assets/images/operation.png",
      openPositions: 2,
    },
    {
      title: "People",
      thumbSrc: "assets/images/people.png",
      openPositions: 6,
    },
    {
      title: "Sales",
      thumbSrc: "assets/images/sales.png",
      openPositions: 7,
    },
    {
      title: "University",
      thumbSrc: "assets/images/education.png",
      openPositions: 8,
    },
    {
      title: "Whatever",
      thumbSrc: "assets/images/education.png",
      openPositions: 1,
    },
  ];
  return (
    <>
      <div className="w-full h-full">
        <h1 className="w-fit mx-auto leading-[3]">Open positions</h1>
        <div className="flex w-4/5 h-[500px] mx-auto overflow-auto gap-[20px] flex-wrap overflow-x-auto *:snap-start *:snap-always snap-y snap-mandatory">
          {jobPositions.map((item) => (
            <CardComponent
              key={item.title}
              {...item}
              cardWidth="basis-[calc((100%-40px)/3)]"
              cardHeight="h-[240px]"
            />
          ))}
        </div>
      </div>
    </>
  );
}
