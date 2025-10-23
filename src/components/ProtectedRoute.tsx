import { useGlobalContext } from "../context/GlobalContext";

const ProtectedRoute = () => {
  const { session } = useGlobalContext();
  if (!session) {
  }
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
