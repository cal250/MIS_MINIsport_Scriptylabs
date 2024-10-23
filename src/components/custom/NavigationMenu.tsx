import {
  Bars3BottomRightIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { NavigationComponent } from "./NavigationItem";
function NavigationMenu({
  maximize,
  setMaximize,
}: {
  maximize: boolean;
  setMaximize: (val: boolean) => void;
}) {
  return (
    <div
      className={`h-[100vh] ${
        !maximize && "w-20"
      } bg-white transition-all duration-300 overflow-auto fixed `}
    >
      <div>
        <div className="bg-myBlue h-16 mb-16 flex justify-between px-4">
          <div
            className={`bg-white  mx-auto rounded-2xl w-20 h-20 flex items-center justify-center mt-4 b ${
              !maximize && "hidden"
            } `}
          >
            <img
              src="/logo.png"
              alt="school logo"
              className={`w-[70px] rounded- h-auto self-center ${
                !maximize && "hidden"
              }`}
            />
          </div>

          <button onClick={() => setMaximize(!maximize)}>
            <Bars3BottomRightIcon className="text-black h-6" />
          </button>
        </div>
        <NavigationComponent
          Item={<RectangleGroupIcon className="w-7" />}
          label="Dashboard"
          showLabel={maximize}
          link="/dashboard"
        />

        <NavigationComponent
          Item={<BuildingLibraryIcon className="w-7" />}
          label="National teams "
          showLabel={maximize}
          link="/nationalTeams"
        />

        <NavigationComponent
          Item={<UserGroupIcon className="w-7" />}
          label="Federations"
          showLabel={maximize}
          link="/federations"
        />

        <NavigationComponent
          Item={<BookOpenIcon className="w-7" />}
          label="sport professionals"
          showLabel={maximize}
          link="/sportProfessionals"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="trainings"
          showLabel={maximize}
          link="/trainings"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="Isonga professionals"
          showLabel={maximize}
          link="/isonga"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="Academies"
          showLabel={maximize}
          link="/academies"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="Infrastructure"
          showLabel={maximize}
          link="/infrastructure"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="Sports tourism "
          showLabel={maximize}
          link="/sportst"
        />

        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="Documents"
          showLabel={maximize}
          link="/documents"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="Contracts"
          showLabel={maximize}
          link="/contracts"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="employees"
          showLabel={maximize}
          link="/employees"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="users"
          showLabel={maximize}
          link="/users"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="paterners"
          showLabel={maximize}
          link="/paterners"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="reports "
          showLabel={maximize}
          link="/reports"
        />
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="sports for all "
          showLabel={maximize}
          link="/sports"
        />
      </div>
    </div>
  );
}

export default NavigationMenu;
