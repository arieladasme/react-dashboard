import { TooltipComponent } from '@syncfusion/ej2-react-popups'

export const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      type="button"
      onClick={customFunc}
      style={{ color }}
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        style={{ background: dotColor }}
      />
      {icon}
    </button>
  </TooltipComponent>
)
