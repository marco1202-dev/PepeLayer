import NavbarLogo from './NavbarLogo'
import NavbarMenuItems from './NavbarMenuItems'
import NavbarActions from './NavbarActions'

export default function NavbarMenu() {
  return (
    <nav 
      className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-[26px] rounded-2xl border-[3px] w-[90%] max-w-[1279.334px]"
      style={{
        top: '35px',
        height: '87.42px',
        padding: '10px 17px',
        borderColor: '#928D86',
        backgroundColor: '#4C4C4C',
        boxShadow: '-1px 2px 20px 0 rgba(0, 0, 0, 0.35) inset',
      }}
    >
      <NavbarLogo />
      <NavbarMenuItems />
      <NavbarActions />
    </nav>
  )
}
