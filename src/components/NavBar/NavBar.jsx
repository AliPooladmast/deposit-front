import { useSelector } from "react-redux";
import style from "./NavBar.module.scss";
import { Avatar } from "@mui/material";
import PageMenu from "../PageMenu/PageMenu";

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.MenuContainer}>
          <PageMenu
            ItemClassName={style.Item}
            TitlesClassName={style.Title}
            SelectedClassName={style.Selected}
            currentUser={currentUser}
          />
        </div>

        {currentUser && (
          <div className={style.Item}>
            <span className={style.Title}>{currentUser.username}</span>
            <Avatar sx={{ width: 40, height: 40 }} alt={currentUser.username}>
              {currentUser.username.charAt(0).toUpperCase()}
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
