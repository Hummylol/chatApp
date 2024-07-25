import Sidebar from "../sidebar/Sidebar.jsx";
import MessageContainer from "../messages/MessageContainer.jsx";

const Home = () => {
	return (
		<div className="h-[100vh] w-screen flex items-center justify-center">
			<div className='flex justify-center sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden'>
			<Sidebar />
			<MessageContainer />
		</div>
		</div>
	);
};
export default Home;