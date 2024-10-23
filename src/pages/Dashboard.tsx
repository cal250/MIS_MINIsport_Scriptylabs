import Header from "@/components/custom/Header";
import { CurrencyDollarIcon, UserCircleIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";

function Dashboard() {
  return (
    <div className="px-4">
      <Header />
      <Facts />
    </div>
  );
}

export default Dashboard;

interface FactProps {
  color: string; // Optional className for custom styling
  children: React.ReactNode;
  label: string;
  value: string;
}

const Fact: React.FC<FactProps> = ({ color, children, label, value }) => {
  return (
    <div className="bg-white flex gap-6 items-center p-4 h-[85px] rounded shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex-1">
      <div className={`p-2 rounded-full ${color} shadow-inner`}>{children}</div>
      <div className="pl-3 border-l-4 border-l-myBlue">
        <p className="text-gray-500 -mb-1">{label}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

const Facts: React.FC = () => {
  // Replace the data fetching with dummy data
  const dummyData = {
    students: 200,
    teachers: 20,
    parents: 100,
    income: "$5,000"
  };

  return (
    <div className="flex mt-4 gap-6">
      <Fact color="bg-green-200" label="Students" value={`${dummyData.students}`}>
        <UserIcon className="h-10 text-green-800" />
      </Fact>
      <Fact color="bg-blue-200" label="Teachers" value={`${dummyData.teachers}`}>
        <UserCircleIcon className="h-10 text-blue-800" />
      </Fact>
      <Fact color="bg-yellow-200" label="Parents" value={`${dummyData.parents}`}>
        <UserGroupIcon className="h-10 text-yellow-800" />
      </Fact>
      <Fact color="bg-red-200" label="Income" value={dummyData.income}>
        <CurrencyDollarIcon className="h-10 text-red-800" />
      </Fact>
    </div>
  );
};
