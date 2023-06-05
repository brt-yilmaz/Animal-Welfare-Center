import { BsFillMoonStarsFill } from "react-icons/bs";
import { darkModeActions } from "../store/index";
import { useDispatch } from "react-redux";

BsFillMoonStarsFill;

function Nav() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="py-6 mb-2 flex justify-between dark:text-white">
        <h1 className="text-2xl font-medium">Pawsome</h1>
        <ul>
          <li>
            <BsFillMoonStarsFill
              onClick={() => dispatch(darkModeActions.changeDarkMode())}
              className="cursor-pointer text-2xl"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
