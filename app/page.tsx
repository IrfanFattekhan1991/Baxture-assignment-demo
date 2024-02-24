import Users from "../components/Users";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/users`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function HomePage() {
  const data = await getData();
  return <Users data={data} />;
}
