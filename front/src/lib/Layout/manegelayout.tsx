import { Link, Route, Routes } from "react-router-dom";
import ManegeReport from "../../page/manege/report";
import ManegeCategory from "../../page/manege/category";
import ManegeBenKeyword from "../../page/manege/benkeyword";
import ManegeUser from "../../page/manege/user";
import ManegePoint from "../../page/manege/point";
import ManegeDeliveryTip from "../../page/manege/deliverytip";
import ManegePageCategory from "../../Component/Category/ManegePageCategory";
import TinyButton from "../../Component/Button/TinyButton";
import Button from "../Button/Button";

interface IProps {
  setpage(): void;
}

const ManegeLayout = ({ setpage }: IProps): JSX.Element => {
  const btn = new Button("메인페이지", "bg-orange-200");
  return (
    <div>
      <div className="p-1 h-[6rem] bg-orange-600">
        <div className="Box h-[100%] flex justify-between items-center ">
          <div className="Center">
            <img src="/imgs/hamster.png" className="h-[4rem]"></img>
            <div>
              <div className="text-[2rem] text-white font-bold">햄스터마켓</div>
              <div className="text-[1rem] text-white font-bold">
                관리자 페이지
              </div>
            </div>
          </div>
          <div className="Center gap-3">
            <div className="h-[3rem] w-[3rem]">
              <img className="h-[100%]" src="/imgs/good.png"></img>
            </div>
            <div className="text-white">{`관리자${"??"}`}</div>
            <Link to={"/"} onClick={setpage}>
              <TinyButton btn={btn} />
            </Link>
          </div>
        </div>
      </div>
      <div className="Box">
        <ManegePageCategory />
        <Routes>
          <Route path="/manege/report" element={<ManegeReport />} />
          <Route path="/manege/category" element={<ManegeCategory />} />
          <Route path="/manege/keyword" element={<ManegeBenKeyword />} />
          <Route path="/manege/user" element={<ManegeUser />} />
          <Route path="/manege/point" element={<ManegePoint />} />
          <Route path="/manege/delivery" element={<ManegeDeliveryTip />} />
        </Routes>
      </div>

      <div className="border border-t border-b">
        <div className="py-[1rem] Box Center text-gray-400 ">
          <div>팀이름</div>
          <div className="mx-[1.5rem] h-[1rem] border border-[1px] border-gray-200 "></div>
          <div>프로젝트 이름</div>
          <div className="mx-[1.5rem] h-[1rem] border border-[1px] border-gray-200 "></div>

          <div>팀원명단</div>
          <div className="mx-[1.5rem] h-[1rem] border border-[1px] border-gray-200 "></div>

          <div>담당영역</div>
          <div className="mx-[1.5rem] h-[1rem] border border-[1px] border-gray-200 "></div>

          <div>깃주소</div>
        </div>
      </div>
    </div>
  );
};

export default ManegeLayout;
