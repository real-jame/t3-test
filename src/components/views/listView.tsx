import { api } from "../../utils/api";

async function GetTransactions() {
  return await api.transactions.getMany(50);
}

const ListView = () => {
  return <h1>test</h1>;
};

export default ListView;
