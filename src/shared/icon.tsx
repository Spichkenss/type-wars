import { type IconType } from "react-icons";
import { TbLogout } from "react-icons/tb";

/* Чтобы добавить новую иконку в библиотеку иконок приложения
*  сперва нужно добавить название иконки в перечисление.
*  Строгая типизация автоматически попросит добавить
*  эту иконку в массив иконок (icons)
*/
export enum IconsEnum {
  Logout
}

type IconsRecordType = {
  [key in keyof typeof IconsEnum]: {
    icon: IconType;
    baseClassName: string;
  };
};

export const icons: IconsRecordType = {
  Logout: {
    icon: TbLogout,
    baseClassName: "text-red-500",
  },
};
