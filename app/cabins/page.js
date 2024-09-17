import Counter from "../components/Counter";

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <>
      <h1>Cabins Page</h1>
      <ui>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ui>
      <Counter users={data} />
    </>
  );
}

export default page;
