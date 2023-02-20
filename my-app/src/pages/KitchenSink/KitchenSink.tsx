import SideBar from "../../components/SideBar/SideBar";
const KitchenSink = () => {
	return (
		<div className='App' id='outer-container'>
			<SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
			<div id='page-wrap'>
				<h1>Cool Restaurant</h1>
				<h2>Check out our offerings in the sidebar!</h2>
			</div>
		</div>
	);
};

export default KitchenSink;
