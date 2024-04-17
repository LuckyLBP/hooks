import { useFetch } from "../../hooks/useFetch";

const Fetch = () => {
  const url = "https://www.boredapi.com/api/activity";

  const { data } = useFetch(url);

  return (
    <div>
      <h3>{data?.activity}</h3>
    </div>
  );
};

export default Fetch;
