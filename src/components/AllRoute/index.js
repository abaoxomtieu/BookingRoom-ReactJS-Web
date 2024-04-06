import { useRoutes } from "react-router-dom";
import { routers } from "../../routes";
function AllRoute() {
  const elements = useRoutes(routers);
  return <>{elements}</>;
}
export default AllRoute;
