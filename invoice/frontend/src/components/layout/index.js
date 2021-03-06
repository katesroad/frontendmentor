import * as React from "react";
import { useTheme, THEME_MODE } from "context/theme.context";
import { useLogout } from "hooks/auth.hooks";
import { IconSun, IconMoon } from "components/Icon";
import { Header, ModeBtn, Avatar, Logo, Main } from "./styles";
import avatarSrc from "./image-avatar.jpg";
import logoSrc from "./logo.png";
import { VscSignOut } from "react-icons/vsc";

export function AppHeader() {
	const [mode, setMode] = useTheme();
	const { mutate } = useLogout();
	const { light, dark } = THEME_MODE;
	const handleClick = () => {
		mode === light ? setMode(dark) : setMode(light);
		return false;
	};
	return (
		<Header as="header">
			<Logo src={logoSrc} alt="invoice app" />
			<>
				<ModeBtn onClick={handleClick}>
					{mode === THEME_MODE.dark ? <IconSun /> : <IconMoon />}
				</ModeBtn>
				<Avatar>
					<img src={avatarSrc} alt="Mr Corner" />
					<span onClick={mutate}>
						<VscSignOut />
					</span>
				</Avatar>
			</>
		</Header>
	);
}

export const AppMain = ({ children }) => {
	return <Main as="main">{children}</Main>;
};
