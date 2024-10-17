'use client'
import Image from 'next/image'
import logo from '../logo.png'

export default function DrawLogo() {
  return (
    <> 
		<Image
        src={logo} // Путь к изображению
        alt="LOGO"
        width={300}
        height={300}
        style={{zIndex: 999}}
				className='top__logo'
      />
			<style jsx>
				{`
				.top__logo{
					position: fixed;
					top: 0;
					right: 0;
					left: 0;
				}
				`}
			</style>
  </>
  );
}
