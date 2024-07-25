import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SInput from "./SInput";

const Sidebar = () => {
	return (
		<div className='glass border-r p-4 flex flex-col'>
			<SInput/>
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;