import Button from "./Button";

function ButtonList() {
  const tabs = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Assam",
    },
    {
      id: 3,
      name: "Sports",
    },
    {
      id: 4,
      name: "React",
    },
    {
      id: 5,
      name: "Tailwind",
    },
    {
      id: 6,
      name: "Police",
    },
    {
      id: 7,
      name: "Frontend",
    },
    {
      id: 8,
      name: "Cricket",
    },
    {
      id: 9,
      name: "Songs",
    },
    {
      id: 10,
      name: "God",
    },
  ];

  return (
    <div className="flex overflow-auto">
      {tabs?.map((item) => (
        <Button key={item.id} name={item.name}></Button>
      ))}
    </div>
  );
}
export default ButtonList;
