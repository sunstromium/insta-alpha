import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import About from "./About";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			
			<CreatePost />
			<ProfileLink />
			<Notifications />
			<About></About>
			{/* <Ab/>out/> */}
		</>
	);
};

export default SidebarItems;
