import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  Bars3BottomRightIcon,
  CheckCircleIcon,
  Cog8ToothIcon,
  FlagIcon,
  FolderMinusIcon,
  FolderOpenIcon,
  LightBulbIcon,
  RectangleGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import { NavigationComponent } from "./NavigationItem";
import { DocumentIcon } from "@heroicons/react/24/outline";
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
          Item={<FlagIcon className="w-7" />}
          label="National teams "
          showLabel={maximize}
          link="/nationalTeams"
        />

        <NavigationComponent
          Item={<AdjustmentsHorizontalIcon className="w-7" />}
          label="Federations"
          showLabel={maximize}
          link="/federations"
        />

        <NavigationComponent
          Item={<LightBulbIcon className="w-7" />}
          label="sport professionals"
          showLabel={maximize}
          link="/sportProfessionals"
        />
        <NavigationComponent
          Item={<AcademicCapIcon className="w-7" />}
          label="trainings"
          showLabel={maximize}
          link="/trainings"
        />
        <NavigationComponent
          Item={<AcademicCapIcon className="w-7" />}
          label="Isonga professionals"
          showLabel={maximize}
          link="/isonga"
        />
        <NavigationComponent
          Item={<CheckCircleIcon className="w-7" />}
          label="Academies"
          showLabel={maximize}
          link="/academies"
        />
        <NavigationComponent
          Item={<CheckCircleIcon className="w-7" />}
          label="Infrastructure"
          showLabel={maximize}
          link="/infrastructure"
        />
        <NavigationComponent
          Item={<FolderMinusIcon className="w-7" />}
          label="Sports tourism "
          showLabel={maximize}
          link="/sportst"
        />

        <NavigationComponent
          Item={<FolderMinusIcon className="w-7" />}
          label="Documents"
          showLabel={maximize}
          link="/documents"
        />
        <NavigationComponent
          Item={<FolderOpenIcon className="w-7" />}
          label="Contracts"
          showLabel={maximize}
          link="/contracts"
        />
        <NavigationComponent
          Item={<CheckCircleIcon className="w-7" />}
          label="employees"
          showLabel={maximize}
          link="/employees"
        />
        <NavigationComponent
          Item={<CheckCircleIcon className="w-7" />}
          label="users"
          showLabel={maximize}
          link="/users"
        />
        <NavigationComponent
          Item={<CheckCircleIcon className="w-7" />}
          label="paterners"
          showLabel={maximize}
          link="/paterners"
        />
        <NavigationComponent
          Item={<DocumentIcon className="w-7" />}
          label="reports "
          showLabel={maximize}
          link="/reports"
        />
        <NavigationComponent
          Item={<TrophyIcon className="w-7" />}
          label="sports for all "
          showLabel={maximize}
          link="/sports"
        />
      </div>

      <div className="mt-20">
        <NavigationComponent
          Item={<Cog8ToothIcon className="w-7" />}
          label="Settings "
          showLabel={maximize}
        />
      </div>
    </div>
  );
}

export default NavigationMenu;
