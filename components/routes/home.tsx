import { HeaderLayout } from "@components/common/headerLayout";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <HeaderLayout>
      <Link to="/carbon" className=" px-4 py-2 rounded-md bg-slate-400 hover:bg-slate-200">
        To Carbon3
      </Link>
    </HeaderLayout>
  );
}
