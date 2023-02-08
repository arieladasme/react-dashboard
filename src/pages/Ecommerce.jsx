import { GoPrimitiveDot } from 'react-icons/go'
import { Button } from '../components'
import { earningData } from '../data/dummy'

export const Ecommerce = () => {
  return (
    <div className=" mt-12">
      <div className=" flex flex-wrap lg:flex-nowrap justify-center">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$54,223.2</p>
            </div>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size="md" />
          </div>
        </div>
        {/* ITEMS */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map(item => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
        {/* /ITEMS */}
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className=" bg-white dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          {/* REVENUE UPDATES */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$78,334</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    22%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$34,811</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
            </div>
          </div>
          {/* /REVENUE UPDATES */}
        </div>
      </div>
    </div>
  )
}
