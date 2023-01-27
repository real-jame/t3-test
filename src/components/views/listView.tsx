import { api } from "../../utils/api";

async function GetTransactions() {
  return await api.transactions.getMany(50);
}

const ListView = () => {
  return (
    <main>
      <p>hi</p>
    </main>
  );
};

export default ListView;
