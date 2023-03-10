import UserDisplay from "./components/UserDisplay";
import { User } from "./types";

import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";

const App = () => {
  const [result] = useQuery({
    query: GetUsersDocument,
  });

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {result.data?.users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
};

export default App;
