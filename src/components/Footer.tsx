import LogoGitHub from '../assets/github-logo.png';
const year = new Date().getFullYear();
function Footer() {
  return (
      <div className='flex bg-lime-50 justify-center items-baseline'>
        <div>&copy;{year}</div>
        <a
              href="https://github.com/verapoletaeva87"
              target="_blank"
              rel="noopener noreferrer"
        >
            <div className='flex items-baseline'> 
                <img className='w-5 h-5 mx-3' src={LogoGitHub} />
                <p>Poletaeva</p>
            </div>
            
        </a>
      </div>
  );
}

export default Footer;