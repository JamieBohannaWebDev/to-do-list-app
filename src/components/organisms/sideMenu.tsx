import TaskMenu from '../molecules/taskMenu';
import ListMenu from '../molecules/listMenu';
import TagsMenu from '../molecules/tagsMenu';
import SettingsMenu from '../molecules/settingsMenu';

const SideMenu = () => {
	return (
		<section className="w-2/5 flex flex-col border h-screen border-red-100 p-5">
			<h2>Menu</h2>
			<div className="flex justify-between flex-col grow">
        <div>
          <TaskMenu></TaskMenu>
          <ListMenu></ListMenu>
          <TagsMenu></TagsMenu>
			  </div>
        <div>
          <SettingsMenu></SettingsMenu>
        </div>
      </div>
		</section>
	);
}

export default SideMenu;
