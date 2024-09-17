import Counter from "@/app/_components/Counter";

export const metadata = {
  title: "Cabins",
};

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <>
      <h1>Cabins Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </>
  );
}

export default page;
