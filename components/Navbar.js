import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { authCheckState, authUserState } from '../store/auth';

export default function NavBar() {
  const router = useRouter();
  const setAuthCheck = useSetRecoilState(authCheckState);
  const authUser = useRecoilValueLoadable(authUserState);
  const logoutHandler = async () => {
    await axios.post('/logout');
    setAuthCheck(false);
    router.back();
  };
  return (
    <nav className="border-b py-2">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200">
                Internet
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200">
                Dashboard
              </a>
            </Link>
          </div>
          {authUser.contents && authUser.state === 'hasValue' ? (
            <div className="flex items-center">
              <Link href="#">
                <a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="rounded-full w-6 h-6"
                      src={authUser.contents.picture}
                      alt={authUser.contents.name}
                    />
                  </div>
                  <span>{authUser.contents.name}</span>
                </a>
              </Link>
              <Link href="/login">
                <button
                  onClick={logoutHandler}
                  className="focus:outline-none block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200"
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center">
              <Link href="/login">
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200">
                  Login
                </a>
              </Link>
              <Link href="/register">
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200">
                  Register
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
